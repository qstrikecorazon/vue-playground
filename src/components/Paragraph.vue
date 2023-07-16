<script setup lang="ts">
import { useParagraph } from '@/composables/paragraph'

const { txt } = useParagraph();
</script>

<template>
    <p>{{ txt }}</p>
</template>