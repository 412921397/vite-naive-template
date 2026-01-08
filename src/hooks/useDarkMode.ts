import { ref, watch, onMounted } from "vue";
import { useSystem } from "@/store";

function useDarkMode() {
  const isDark = ref(localStorage.getItem("theme") === "dark");
  const { setTheme } = useSystem();

  const apply = () => {
    const html = document.documentElement;
    isDark.value ? html.classList.add("dark") : html.classList.remove("dark");

    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  onMounted(apply);
  watch(isDark, apply);

  const toggleDark = () => {
    isDark.value = !isDark.value;
    setTheme(isDark.value ? "dark" : "light");
  };

  return { isDark, toggleDark };
}

export default useDarkMode;
