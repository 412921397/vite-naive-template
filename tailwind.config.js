export default {
  source: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // 这里只需定义你自定义的断点
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "992px"
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"]
      }
    }
  }
};
