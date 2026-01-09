<template>
  <div class="flex flex-col justify-center items-center mt-35">
    <div class="w-full flex flex-row items-center justify-center gap-4!">
      <a class="mr-[30px]!" href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>

      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <div class="default-transition my-5 text-[#f00] desktop:text-[green] text-xl font-bold">响应式的样式</div>

    <n-button class="mt-[30px]" type="success" @click="toggleDark">主题切换</n-button>
    <home msg="Vite + Vue" />
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from "@/hooks";

import home from "@/components/HelloWorld.vue";

const { toggleDark } = useDarkMode();
</script>

<style scoped lang="scss"></style>
