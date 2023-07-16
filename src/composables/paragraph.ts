import { ref } from 'vue'

const txt = ref('')
let hasDefault = false

export function useParagraph(defaultText: string = '') {
    function setText(text: string) {
        txt.value = text
    }

    if (!hasDefault && defaultText) setText(defaultText)
    if (!hasDefault) hasDefault = true

    return { txt, setText }
}
