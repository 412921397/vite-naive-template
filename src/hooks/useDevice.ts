import { ref, onMounted, onBeforeUnmount } from "vue";

function useDevice() {
  const isMobile = ref(false);

  const checkDevice = () => {
    const width = window.innerWidth;
    // 建议断点：1199px 防站是768
    isMobile.value = +width <= 768;
  };

  onMounted(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkDevice);
  });

  return { isMobile };
}

export default useDevice;
