<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h3 class="text-h6 font-weight-bold text-center mt-3">
        کنترل پنل دستگاه
      </h3>
    </v-col>
    <v-col cols="12" sm="9" md="6" xl="5">
      <v-card outlined style="background-color: #ebf0f9;">
        <v-container>
          <v-row justify="center" align="center">
            <v-col v-for="(item,i) in items" :key="`item-${i}`" cols="6">
              <v-btn block :loading="item.loading" @click="sendCommand(item)">
                <v-icon v-if="item.icon !== 'mdi-'" right>
                  {{ item.icon }}
                </v-icon>
                <span v-text="item.text" />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      items: [
        { text: 'فعال کردن سیستم', command: '', icon: 'mdi-', loading: false },
        { text: 'غیرفعال کردن سیستم', command: '', icon: 'mdi-', loading: false },
        { text: 'گزارش‌گیری', command: '', icon: 'mdi-', loading: false },
        { text: 'دریافت میزان آنتن‌دهی', command: '', icon: 'mdi-', loading: false },
        { text: 'دریافت دما و رطوبت', command: '', icon: 'mdi-', loading: false },
        { text: 'گزارش شماره تلفن‌ها', command: '', icon: 'mdi-', loading: false }
      ]
    }
  },
  methods: {
    sendCommand (item) {
      item.loading = true
      setTimeout(() => {
        alert('پیامک با موفقیت ارسال شد.')
        item.loading = false
      }, 3000)
    }
  }
}
</script>
