<template>
  <div class="action-card px-3 pa-2" @click="$emit('click')">
    <div class="d-flex align-center">
      <v-avatar size="64">
        <v-icon>mdi-remote</v-icon>
      </v-avatar>
      <div class="d-flex flex-column">
        <div class="text-body-1 text--primary font-weight-bold" v-text="text" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'عنوان کارت'
    }
  }
}
</script>
<style>

</style>
