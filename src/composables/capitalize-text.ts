import { ref, toValue, computed } from 'vue'
import { capitalize, split, trimEnd, join, map } from 'lodash'

export function useCapitalizeText() {
    const text = ref('')
    const capitalizeText = computed(() => {
        const txt = text.value
        if (!txt) return ''
        else if (txt && !txt.includes(' ')) return capitalize(txt)
        else {
            const arrayText = map(split(txt, ' '), capitalize)

            return trimEnd(join(arrayText, ' '))
        }
    })

    return { text, capitalizeText }
}
