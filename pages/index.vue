<template>
  <v-row class="fill-height">
    <v-col cols="12" sm="9" md="6" xl="5" class="d-flex flex-column justify-end fill-height">
      <v-card class="d-flex flex-column rounded-xxl elevation-3" :class="{'fill-height' : hasDevice}" color="surface">
        <template v-if="hasDevice">
          <v-card-text class="d-flex flex-column" style="gap: 16px;">
            <device-card v-for="(device, i) in devices" :key="`dc-${i}`" v-bind="device" @click="$router.push('/dashboard')" />
          </v-card-text>
        </template>
        <template v-else>
          <v-card-title class="font-weight-bold">
            راه‌اندازی
          </v-card-title>
          <v-card-text class="text--primary text-body-1" style="line-height: 2em;">
            <div>کار با اپلیکیشن <strong class="primary--text">هوش‌بان</strong> بسیار ساده است!</div>
            <div>برای شروع کافیست دستگاه هوشمند خود را به اپلیکیشن اضافه کنید.</div>
          </v-card-text>
          <v-form ref="deviceForm" @submit.prevent="submitForm">
            <v-card-text class="flex-grow-1">
              <div dir="ltr">
                <v-text-field
                  v-model="formData.simNumber"
                  dir="ltr"
                  outlined
                  rounded
                  maxlength="11"
                  type="tel"
                  label="شماره سیم‌کارت داخل دستگاه"
                  enterkeyhint="next"
                />
              </div>
              <v-text-field
                v-model="formData.name"
                outlined
                rounded
                label="نام دستگاه"
                hint="یک نام دلخواه برای دستگاه"
                placeholder="مثال: دستگاه کارگاه"
                enterkeyhint="done"
              />
            </v-card-text>
            <v-card-actions class="pb-4">
              <v-btn
                ref="submitBtn"
                type="submit"
                block
                rounded
                color="primary"
                height="48"
              >
                <span class="text-h6 font-weight-bold">
                  ثبت دستگاه
                </span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'startup',
  data () {
    return {
      formData: {
        simNumber: '',
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters('devices', ['hasDevice', 'devices'])
  },
  methods: {
    ...mapActions('devices', ['addDevice']),
    async submitForm () {
      this.$refs.submitBtn.$el.focus()
      try {
        await this.addDevice(this.formData)
        this.$router.push('/dashboard/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>

</style>
