import { defineStore } from "pinia";

const useSystemStore = defineStore("system", {
  persist: true, // state 持久化
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
    lang: localStorage.getItem("lang") || "zh_CN"
  }),
  actions: {
    setTheme(val: string) {
      this.theme = val;
      localStorage.setItem("theme", val);
    },
    setLangAction(val: string) {
      this.lang = val;
      localStorage.setItem("lang", val);
    }
  }
});

export default useSystemStore;
