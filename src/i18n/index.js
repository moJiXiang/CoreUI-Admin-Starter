import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': require('./en.json'),
    'zh': require('./zh.json')
  }
})

i18n.formatter = {
  format: (message, ...values) => {
    return i18n.messages[i18n.locale][message]
  }
}

export default i18n
