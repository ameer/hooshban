import { commands } from '../schema/commands'
function initialState () {
  return {
    currentPassword: '0000',
    pageTitle: '',
    currentPage: 'index'
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
  }
}
export const getters = {
  pageTitle (state) {
    return state.pageTitle
  },
  commandsList (state) {
    return Object.values(commands).filter(c => c.pages.includes(state.currentPage))
  }
}
