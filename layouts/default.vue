<template>
  <v-app dark>
    <Nuxt v-if="!$slots.default" />
    <slot />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { StatusBar } from '@capacitor/status-bar'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      devices: null
    }
  },
  async fetch () {
    await this.getDevices()
  },
  mounted () {
    StatusBar.setBackgroundColor({ color: '#006250' })
  },
  methods: {
    ...mapActions('devices', ['getDevices'])
  }
}
</script>
