<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCapitalizeText } from '@/composables/capitalize-text'
import { useUserStore } from '@/stores/user'

const { text, capitalizeText } = useCapitalizeText()
const userStore = useUserStore();

onMounted(() => {
    setTimeout(() => {
        userStore.$patch({
            user: {
                age: 13
            }
        })
    }, 5000)
})
</script>

<template>
    <div>
        <p v-for="(value, key, i) in userStore.user" :key="i">
            {{ key }}: {{ value }}
        </p>
        <p>user_admin? {{ userStore.isAdmin() ? 'Yes' : 'No' }}</p>
    </div>
    <div v-if="capitalizeText">
        <p>{{ capitalizeText }}</p>
    </div>
    <div>
        <input type="text" v-model="text" />
    </div>
</template>
