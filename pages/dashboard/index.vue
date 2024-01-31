<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" class="text-center" style="position: sticky !important; top: 17px; z-index: 6;">
      <h3 class="d-inline-block text-body-1 font-weight-bold text-center primary white--text">
        {{ pageTitle }}
      </h3>
    </v-col>
    <v-col
      cols="12"
      sm="9"
      md="6"
      xl="5"
      class="pt-4"
    >
      <v-card class="rounded-t-xxl elevation-0" color="surface">
        <v-container class="pt-12 px-8">
          <transition-group name="fade-out-in" tag="div" class="row justify-center align-center" :style="{ '--total': commandsList.length }">
            <v-col v-for="(item) in commandsList" :key="item.id" cols="12">
              <action-card :text="item.text" @click="sendCommand(item)" />
            </v-col>
          </transition-group>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions'
import { SMS } from '@awesome-cordova-plugins/sms'
export default {
  name: 'IndexPage',
  layout: 'dashboard',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['pageTitle', 'commandsList']),
    ...mapGetters('devices', ['currentDevice'])
  },
  methods: {
    sendCommand (item) {
      try {
        this.checkAndSend(this.currentDevice.simNumber, '0000*' + item.s)
      } catch (error) {
        console.log(error)
      }
    },
    sendSMS (number, message) {
      const self = this
      // const message = 'test message' // + '\n' + self.appHash // For next version
      SMS.send(number, message, { android: { intent: '', slot: self.simCardSlot } })
        .then(() => {
          alert('پیامک با موفقیت ارسال شد.')
        })
        .catch((err) => {
          alert('مشکلی در ارسال پیامک به وجود آمده است.' + err)
        }).finally(() => {
        })
    },
    checkAndSend (number, command) {
      const self = this
      const success = function (hasPermission) {
        if (hasPermission) {
          self.sendSMS(number, command)
        } else {
          AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.SEND_SMS).then(() => {
            self.sendSMS(number, command)
          }).catch((err) => {
            alert(JSON.stringify(err))
          }).finally(() => {
            this.$store.dispatch('watchingForSMS', false)
          })
        }
      }
      const error = function (err) { this.$toast.error('Something went wrong:' + err); this.$nuxt.$emit(`messageNotReceived-${command.name}`, err) }
      SMS.hasPermission(success, error)
    },
    requestSMSPermission () {
      const success = function (hasPermission) {
        if (!hasPermission) {
          SMS.requestPermission(function () {
            console.log('[OK] Permission accepted')
          }, function (error) {
            console.log(error)
            console.info('[WARN] Permission not accepted')
            // Handle permission not accepted
          })
        }
      }
      const error = function (e) { alert('Something went wrong:' + e) }
      SMS.hasPermission(success, error)
    }
  }
}
</script>
