function initialState () {
  return {
    devices: {}
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
  _setProperty (state, [propertyKey, value]) {
    state[propertyKey] = value
  },
  _addDevice (state, [key, value]) {
    state.devices[key] = value
  }
}
export const actions = {
  async getDevices ({ dispatch, commit }) {
    try {
      const devices = await dispatch('getPersistData', { key: 'devices', defaultValue: {} }, { root: true })
      commit('_setProperty', ['devices', devices])
    } catch (error) {
      return error
    }
  },
  async addDevice ({ dispatch, commit, state }, { simNumber, name }) {
    const deviceKey = simNumber.slice(1)
    const exist = await dispatch('checkDeviceExist', deviceKey)
    if (exist) {
      throw new Error(`Device <${simNumber}> already exists!`)
    }
    const deviceObject = {
      simNumber,
      name
    }
    commit('_addDevice', [deviceKey, deviceObject])
    return await dispatch('setPersistData', { key: 'devices', value: state.devices }, { root: true })
  },
  checkDeviceExist ({ state }, deviceKey) {
    return typeof state.devices[deviceKey] !== 'undefined'
  }
}
export const getters = {
  devices (state) {
    return state.devices
  },
  hasDevice (_state, { devices }) {
    return Object.keys(devices).length > 0
  },
  currentDevice (state) {
    // Should be changed
    const values = Object.values(state.devices)
    return values[0]
  }
}
