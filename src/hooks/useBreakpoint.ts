import { ref, onMounted, onUnmounted, computed } from "vue";
import breakpoints from "@/config";

function useBreakpoint() {
  const width = ref(window.innerWidth);

  const onResize = () => (width.value = window.innerWidth);

  onMounted(() => window.addEventListener("resize", onResize));
  onUnmounted(() => window.removeEventListener("resize", onResize));

  const isMobile = computed(() => width.value < breakpoints.sm);

  const size = computed(() => {
    const w = width.value;
    if (w < breakpoints.sm) return "xs";
    if (w < breakpoints.md) return "sm";
    if (w < breakpoints.lg) return "md";
    if (w < breakpoints.xl) return "lg";
    return "xl";
  });

  return { width, isMobile, size };
}

export default useBreakpoint;
