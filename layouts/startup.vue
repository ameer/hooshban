<template>
  <default-layout>
    <startup-app-bar />
    <div class="flexible-space" :style="`height: ${halfScreenHeight};`" />
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
  </default-layout>
</template>
<script>
import DefaultLayout from '~/layouts/default.vue'
export default {
  components: {
    DefaultLayout
  },
  data () {
    return {
      height: 100
    }
  },
  computed: {
    halfScreenHeight () {
      if (this.height && !isNaN(this.height)) {
        return Math.floor(this.height / 2) + 'px'
      } else {
        return '50%'
      }
    }
  },
  mounted () {
    try {
      this.height = window.screen.availHeight ?? window.screen.height ?? 100
    } catch (error) {

    }
  }

}
</script>
<style>

</style>
