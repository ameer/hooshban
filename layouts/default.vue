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
      <v-container class="px-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      :value="1"
      color="primary"
      background-color="surface"
      grow
      app
      fixed
      shift
      height="74"
    >
      <v-btn v-for="(item, i) in bnItems" :key="`bn-${i}`" :ripple="false" @click="setPage(item)">
        <span v-text="item.t" />
        <v-icon v-text="item.icon" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { StatusBar } from '@capacitor/status-bar'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'هوش‌بان',
      bnItems: [
        { t: 'رله‌ها', pageName: 'relays', icon: 'mdi-electric-switch' },
        { t: 'ریموت‌ها', pageName: 'remotes', icon: 'mdi-remote' },
        { t: 'مرکز کنترل', pageName: 'index', icon: 'mdi-dots-hexagon' },
        { t: 'حسگر‌های بی‌سیم', pageName: 'wireless-sensors', icon: 'mdi-router-wireless' },
        { t: 'تنظیمات', pageName: 'settings', icon: 'mdi-cog-outline' }
      ]
    }
  },
  mounted () {
    StatusBar.setBackgroundColor({ color: '#006250' })
  },
  methods: {
    ...mapActions(['setPageTitle', 'setCurrentPage']),
    setPage (item) {
      this.setPageTitle(item.t)
      this.setCurrentPage(item.pageName)
    }
  }
}
</script>
