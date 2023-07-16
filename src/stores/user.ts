import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
    id: number
    name: string
    age: number
    is_admin: 0 | 1
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User | undefined>({
        id: 1,
        name: 'corazon',
        age: 24,
        is_admin: 1
    })

    function isAdmin(): boolean {
        return Boolean(user.value?.is_admin)
    }

    return { user, isAdmin }
})
