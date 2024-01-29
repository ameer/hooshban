<template>
  <div class="device-card px-3 pa-2" @click="$emit('click')">
    <div class="d-flex align-center">
      <v-avatar size="64">
        <v-icon>mdi-tablet</v-icon>
      </v-avatar>
      <div class="d-flex flex-column">
        <div class="text-body-1 text--primary font-weight-bold" v-text="name" />
        <div class="text-body-2 text--secondary" v-text="simNumber" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'عنوان کارت'
    },
    simNumber: {
      type: String,
      default: 'عنوان کارت'
    }
  }
}
</script>
<style>

</style>
