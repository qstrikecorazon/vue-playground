<script setup lang="ts">
import Paragraph from '@/components/Paragraph.vue'
import { useParagraph } from '@/composables/paragraph'
import { useRoute } from 'vue-router'

const route = useRoute()
const { txt, setText } = useParagraph(
    typeof route.query['text'] === 'string' ? route.query['text'] : ''
)

type onInputCallback = (e: Event) => void

const onInput: onInputCallback = (e) => {
    setText((e.target as HTMLInputElement).value)
}
</script>

<template>
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <Paragraph />
    <input type="text" @input="onInput" :value="txt" />
</template>
