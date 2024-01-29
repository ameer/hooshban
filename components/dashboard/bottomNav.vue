<template>
  <v-bottom-navigation
    :value="currentPage"
    color="primary"
    background-color="surface"
    grow
    app
    fixed
    shift
    height="74"
    @change="setCurrentPage"
  >
    <v-btn v-for="(item, i) in bnItems" :key="`bn-${i}`" :ripple="false" :value="item.pageName">
      <span v-text="item.t" />
      <v-icon v-text="item.icon" />
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentPage', 'bnItems'])
  },
  methods: {
    ...mapActions(['setCurrentPage'])
  }
}
</script>
<style>

</style>
