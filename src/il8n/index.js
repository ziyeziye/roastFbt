import Vue from 'vue'
import VueI18n from 'vue-i18n'
const messages = {
  zh: {
    tips: 'FBT质押奖励池，每24小时最高10%的质押奖励和13%的直推奖励',
    totalPool: '总矿池',
    wallet: '钱包',
    power: '你的算力',
    roasted: '燃烧FBT',
    dailyReturn: '日利率',
    APR: '年利率',
    fee: '服务费',
    link: '推广链接',
    invitedTips: '从使用您的推荐链接的任何人那里获得用于燃烧FBT的13%',
    copy: '复制',
  },
  en: {
    tips: 'The BNB Reward Pool with the 10% daily return and 13% referral rewards and lowest dev fee',
    totalPool: 'Contract',
    wallet: 'Wallet',
    power: 'You Corn',
    roasted: 'ROASTED CORN',
    dailyReturn: 'Daily Return',
    APR: 'APR',
    fee: 'Dev Fee',
    link: 'Referral Link',
    invitedTips: 'Earn 13% of the BNB used to roast corn from anyone who uses your referral link',
  }
}
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh', // set locale
  silentFallbackWarn: true,
  messages, // set locale messages
})

export default i18n


// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import { APP_LANG } from '@/commons/const'
// import zh from './zh'
// import en from './en'

// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: localStorage.getItem(APP_LANG) || 'en',
//   silentFallbackWarn: true,
//   messages: {
//     en,
//     zh,
//   },
// })

// export default i18n
