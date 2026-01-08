import * as echarts from "echarts";

export default function (el) {
  const echartInstance = echarts.init(el, null, { renderer: "svg" });

  /** 传入相应的地图options配置 */
  const setOptions = (options) => {
    echartInstance.setOption(options);
  };

  /** 更新窗口变化 */
  const updateSize = () => {
    echartInstance.resize();
  };

  /** 监听浏览器的窗口变化 */
  window.addEventListener("resize", updateSize);

  /** 移除浏览器的窗口变化 */
  const removeResize = () => {
    window.removeEventListener("resize", updateSize);
  };
  return {
    echartInstance,
    setOptions,
    updateSize,
    removeResize
  };
}
