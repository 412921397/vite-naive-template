module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue", "stylelint-config-standard-scss"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    /* 允许 Tailwind 指令 */
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          // tailwind
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",

          // scss
          "use",
          "forward",
          "mixin",
          "include",
          "if",
          "else",
          "for",
          "each",
          "while"
        ]
      }
    ],

    /* scoped / vue 常见放宽 */
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep", "deep"]
      }
    ],

    /* 属性顺序（可选但推荐） */
    "order/properties-order": [
      [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "display",
        "flex",
        "flex-direction",
        "justify-content",
        "align-items",
        "width",
        "height",
        "margin",
        "padding",
        "font",
        "font-size",
        "color",
        "background"
      ]
    ]
  }
};
