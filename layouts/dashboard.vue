<template>
  <default-layout>
    <dashboard-app-bar :device-title="currentDevice?.name ?? 'دستگاهی انتخاب نشده است'" />
    <div class="flexible-space" />
    <v-main>
      <v-container class="px-0">
        <Nuxt />
      </v-container>
    </v-main>
    <dashboard-bottom-nav />
  </default-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import DefaultLayout from '~/layouts/default.vue'
export default {
  components: {
    DefaultLayout
  },
  computed: {
    ...mapGetters('devices', ['currentDevice'])
  }
}
</script>
<style>

</style>
