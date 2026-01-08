import type { App } from "vue";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

import useSystem from "./modules/system";

const store = createPinia();
store.use(piniaPluginPersistedstate);

export function registerStore(app: App) {
  app.use(store);
}

export { useSystem };
export default store;
