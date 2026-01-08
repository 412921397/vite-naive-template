<script setup lang="ts">
import { computed } from "vue";
import { NConfigProvider, NSpace, darkTheme } from "naive-ui";
import { dateZhCN } from "naive-ui";
import { storeToRefs } from "pinia";

import { useSystem } from "@/store";
import { lightThemeOverrides, darkThemeOverrides } from "@/utils/themeOverrides";

const system = useSystem();
const { theme: thmemMode } = storeToRefs(system);

const themeClass = computed(() => (thmemMode.value === "dark" ? "theme-dark" : "theme-light"));
const theme = computed(() => (thmemMode.value === "dark" ? darkTheme : null));
</script>

<template>
  <div :class="themeClass" class="default-transition">
    <n-config-provider
      preflight-style-disabled
      :theme="theme"
      :date-locale="dateZhCN"
      :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
    >
      <n-message-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <n-space vertical>
              <div class="content relative">
                <div class="mx-auto mb-38 relative top-[120px] desktop:w-[1200px] px-4">
                  <router-view v-slot="{ Component, route }">
                    <transition name="fade">
                      <KeepAlive v-if="route.meta.keepAlive">
                        <component :is="Component" />
                      </KeepAlive>
                      <component v-else :is="Component" :key="route.fullPath" />
                    </transition>
                  </router-view>
                </div>
              </div>
            </n-space>
          </n-notification-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<style scoped lang="scss">
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

/* 路由切换动画 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.2s;
}

/* 可能为enter失效，拆分为 enter-from和enter-to */
.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
