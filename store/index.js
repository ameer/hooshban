import { Preferences } from '@capacitor/preferences'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { commands, prepareCommand } from '../schema/commands'
function initialState () {
  return {
    currentPassword: '0000',
    pageTitle: '',
    currentPage: 'index',
    bottomNavigationItems: [
      { t: 'رله‌ها', pageName: 'relays', icon: 'mdi-electric-switch' },
      { t: 'ریموت‌ها', pageName: 'remotes', icon: 'mdi-remote' },
      { t: 'مرکز کنترل', pageName: 'index', icon: 'mdi-dots-hexagon' },
      { t: 'حسگر‌های بی‌سیم', pageName: 'wireless-sensors', icon: 'mdi-router-wireless' },
      { t: 'تنظیمات', pageName: 'settings', icon: 'mdi-cog-outline' }
    ]
  }
}
export const state = initialState
export const mutations = {
  resetState (state) {
    // acquire initial state
    const s = initialState()
    Object.keys(s).forEach((key) => {
      // @ts-expect-error Unknown keys
      state[key] = s[key]
    })
  },
  _setProperty (state, [propertyKey, pageName]) {
    state[propertyKey] = pageName
  }
}
export const actions = {
  setPageTitle ({ commit }, pageTitle) {
    commit('_setProperty', ['pageTitle', pageTitle])
  },
  setCurrentPage ({ commit }, pageName) {
    commit('_setProperty', ['currentPage', pageName])
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setPersistData ({ dispatch }, { key, value }) {
    return await Preferences.set({
      key,
      value: JSON.stringify(value)
    })
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getPersistData ({ dispatch }, { key, defaultValue }) {
    const value = await Preferences.get({ key })
    if (value && typeof value.value === 'string') { return JSON.parse(value.value) }
    return value.value ?? defaultValue
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removePersistData ({ dispatch }, key) {
    return await Preferences.remove({ key })
  }
}
export const getters = {
  currentPage (state) {
    return state.currentPage
  },
  bnItems (state) {
    return state.bottomNavigationItems
  },
  pageTitle (state, { bnItems }) {
    const selectedItem = bnItems.find(item => item.pageName === state.currentPage)
    return selectedItem.t
  },
  commandsList (state) {
    return Object.values(commands).filter(c => c.pages.includes(state.currentPage))
  }
}
