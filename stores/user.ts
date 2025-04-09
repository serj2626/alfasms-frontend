import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const token = useStorage('token', '')
  const user = ref(null)

  const isLoggedIn = computed(() => !!token.value)

  function setAuth(data: any) {
    token.value = data.token
    user.value = data.user
  }

  function logout() {
    token.value = ''
    user.value = null
  }

  return { token, user, isLoggedIn, setAuth, logout }
})