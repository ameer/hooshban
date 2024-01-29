<template>
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
    <v-spacer />
    <span class="font-weight-bold" v-text="deviceTitle" />
  </v-app-bar>
</template>
<script>
export default {
  props: {
    deviceTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>

</style>
