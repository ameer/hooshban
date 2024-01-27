<template>
  <v-app dark>
    <v-app-bar
      fixed
      color="primary"
      dark
      app
      class="elevation-0"
    >
      <v-app-bar-title class="font-weight-black" style="z-index: 6 !important;">
        هوش‌بان
      </v-app-bar-title>
    </v-app-bar>
    <div class="flexible-space" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      :value="1"
      color="primary"
      grow
      app
      fixed
      shift
      height="74"
    >
      <v-btn v-for="(item, i) in bnItems" :key="`bn-${i}`" :ripple="false">
        <span v-text="item.t" />
        <v-icon v-text="item.icon" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { StatusBar } from '@capacitor/status-bar'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'هوش‌بان',
      bnItems: [
        { t: 'رله‌ها', icon: 'mdi-electric-switch', to: '/relays' },
        { t: 'زون‌ها', icon: 'mdi-alpha-z-box-outline', to: '/zones' },
        { t: 'مرکز کنترل', icon: 'mdi-dots-hexagon', to: '/' },
        { t: 'حسگر‌های بی‌سیم', icon: 'mdi-router-wireless', to: '/wireless-sensors' },
        { t: 'ریموت‌ها', icon: 'mdi-remote', to: '/remotes' }
      ]
    }
  },
  mounted () {
    StatusBar.setBackgroundColor({ color: '#006250' })
  },
  methods: {
    onScroll (e) {
      console.log(e.target.documentElement.scrollTop)
    }
  }
}
</script>
