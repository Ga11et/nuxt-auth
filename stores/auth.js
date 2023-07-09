import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    status: ''
  }),
  getters: {
    getUser () {
      return this.user
    } ,
    getStatus () {
      return  this.status
    }
  },
  actions: {
    setUser(payload) {
      this.user = payload
    },
    setStatus(payload) {
      this.status = payload
    }
  }
})