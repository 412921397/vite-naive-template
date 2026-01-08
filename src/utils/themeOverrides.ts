import type { GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#FF0000"
  },
  Button: {
    textColor: "#FF0000"
  }
};

const lightThemeOverrides = {
  common: {
    primaryColor: "#000000"
  },
  Button: {
    // textColor: "#FF0000"
  }
};

const darkThemeOverrides = {
  common: {
    primaryColor: "#ffffff"
  },
  Button: {
    // textColor: "#FF0000"
  }
};

export { lightThemeOverrides, darkThemeOverrides };
export default themeOverrides;
