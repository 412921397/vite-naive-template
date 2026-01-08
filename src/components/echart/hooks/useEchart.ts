import * as echarts from "echarts";

import chinaMapData from "../data/china.json";

echarts.registerMap("china", chinaMapData);

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
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
