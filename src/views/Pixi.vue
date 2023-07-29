<script setup lang="ts">
import { Application, Sprite } from 'pixi.js';
import { onMounted, ref } from 'vue';

const app = new Application();
const ship = Sprite.from('/images/rocket-ship.png');
const elapsed = ref(0.0);
app.stage.addChild(ship)

const execute = () => {
    app.ticker.add(delta => {
        elapsed.value += delta;

    })
}
onMounted(() => {
    document.querySelector('div[app-container]')
        ?.appendChild((app.view as unknown) as Node)
    
    // setTimeout(execute, 2000)
})
</script>
<template>
    <div app-container></div>
    <div>elapsed: {{ elapsed }}</div>
    <div>
        move
        <button @click="ship.x-10">left</button>
        <button @click="ship.x+10">right</button>
    </div>
</template>