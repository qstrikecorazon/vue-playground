<script setup lang="ts">
import { onMounted } from 'vue'
import { useCapitalizeText } from '@/composables/capitalize-text'
import { useUserStore } from '@/stores/user'
import { useItemsStore } from '@/stores/items'

const { text, capitalizeText } = useCapitalizeText()
const userStore = useUserStore()
const itemsStore = useItemsStore()

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
        <p v-for="(value, key, i) in userStore.user" :key="i">{{ key }}: {{ value }}</p>
        <p>user_admin? {{ userStore.isAdmin() ? 'Yes' : 'No' }}</p>
    </div>
    <div v-if="capitalizeText">
        <p>{{ capitalizeText }}</p>
    </div>
    <div>
        <input type="text" v-model="text" />
    </div>
    <div>
        <button @click="userStore.$reset()">click me</button>
    </div>

    <div v-if="itemsStore.items.length">
        <h4>Unix commands:</h4>
        <div v-for="(item, i) in itemsStore.items" :key="i">
            {{ item }} <span><button @click="itemsStore.removeItem(item)">x</button></span>
        </div>
    </div>
    <div v-else>
        <button @click="itemsStore.$reset()">reset</button>
    </div>

    <div>First: {{ itemsStore.getUppercasedFirstItem }}</div>
</template>
