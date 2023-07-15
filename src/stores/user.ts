import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: 1,
        name: 'corazon',
        age: 24,
        is_admin: 1
    })

    function isAdmin(): boolean {
        return Boolean(user.value.is_admin)
    }

    return { user, isAdmin };
})