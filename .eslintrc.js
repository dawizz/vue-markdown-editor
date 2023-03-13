module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false
  },
  extends: [
    // Eslint recommended rules
    'eslint:recommended',
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue,
    'plugin:vue/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    camelcase: 'off',
    'n/no-callback-literal': 'warn',
    'no-useless-call': 'warn',
    'vue/no-v-model-argument': 'off'
  }
}
