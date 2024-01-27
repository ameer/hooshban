import { commands } from '../schema/commands'
function initialState () {
  return {
    currentPassword: '0000',
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
  }
}
export const actions = {

}
export const getters = {
  commandsList (state) {
    return Object.values(commands).filter(c => c.pages.includes(state.currentPage))
  }
}
