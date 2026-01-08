<template>
  <div class="flex flex-col items-center">
    <div class="w-full flex flex-row items-center justify-center gap-4!">
      <a class="mr-[30px]!" href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>

      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

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
