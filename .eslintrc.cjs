module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'prettier' // 关键：关掉 ESLint 中和 Prettier 冲突的规则
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'vue/no-v-html': 'off', // 中后台常用
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
