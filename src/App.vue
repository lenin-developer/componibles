<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue';
import { useMouse } from './componibles/ejemploSimpleMouse/MouseEvent.ts';

const element: Ref<HTMLElement> = ref(null);
const { x, y } = useMouse(element);
</script>

<template>
  <div class="wrapper" ref="element">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p>{{ x }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
