import { createApp } from "vue";

import store from "./store";
import router from "./router";

import App from "./App.vue";

import "./style.css";
import "normalize.css";
import "@/assets/css/index.scss";
import "@/assets/css/tailwind.css";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
