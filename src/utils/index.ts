import dayjs from "dayjs";

type dateT = "day" | "week" | "month" | "year";

// 设置localStorage
export const setStorage = function (key: any, obj: any) {
  let json = JSON.stringify(obj);
  window.localStorage.setItem(key, json);
};

// 获取localStorage
export const getStorage = function (key: any) {
  const str = window.localStorage.getItem(key) || "";
  if (!str) {
    return null;
  }
  return JSON.parse(str);
};

// 删除key
export const deleteCache = (key: any) => {
  window.localStorage.removeItem(key);
};

// 处理钱的单位
export function formatMoney(number: number) {
  if (number >= 1e9) {
    return formatNumber(number / 1e9) + "B";
  }
  if (number >= 1e7) {
    return formatNumber(number / 1e6) + "M";
  }
  if (number >= 1e4) {
    return formatNumber(number / 1e3) + "K";
  }
  return formatNumber(number);
}

function formatNumber(number: number) {
  const rounded = Math.round(number * 100) / 100;
  const truncated = Math.trunc(rounded * 100) / 100;
  const parts = truncated.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export const formatFloat = function (f: number, digit: number) {
  // Math.pow(指数，幂指数)
  const m = Math.pow(10, digit);
  // Math.round（） 四舍五入
  return Math.round(f * m) / m;
};

export function fmtPercentage(money: string | number) {
  if (money === "-") return 0;
  if (money && money !== "-") {
    return formatFloat(typeof money === "string" ? parseFloat(money) : money, 2) + "%";
  }
}

export const fmtDate = (num: number = 1, date: dateT = "day", startOf: dateT = "day", format: string = "DD-MM-YYYY") => {
  return dayjs().subtract(num, date).startOf(startOf).format(format);
};
