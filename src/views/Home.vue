<script setup lang="ts">
import { ref } from 'vue'
import { useCapitalizeText } from '@/composables/capitalize-text'

const { text, capitalizeText } = useCapitalizeText()
</script>

<template>
    <div v-if="capitalizeText">
        <p>{{ capitalizeText }}</p>
    </div>
    <div>
        <input type="text" v-model="text" />
    </div>
</template>
