interface State {
  [key: string]: string | object | undefined
}
function initialState () {
  return {
    currentPassword: '0000'
  }
}
export const state = initialState
export const mutations = {
  resetState (state: State) {
    // acquire initial state
    const s = initialState()
    Object.keys(s).forEach((key: string) => {
      // @ts-expect-error Unknown keys
      state[key] = s[key]
    })
  }
}
export const actions = {

}
export const getters = {
}
