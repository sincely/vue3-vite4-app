import { defineStore } from 'pinia'
// import piniaPersistConfig from '@/config/piniaPersist'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    userInfo: { name: 'GuYue' }
  }),
  getters: {},
  actions: {
    setToken(token) {
      this.token = token
    },

    setUserInfo(userInfo) {
      this.userInfo = userInfo
    }
  }
  // persist: piniaPersistConfig('user')
})
