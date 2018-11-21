module.exports = {
  root: true,

  env: {
    node: true
  },

  /*
  extends: ["plugin:vue-libs/recommended"],
  rules: {
    // override if necessary
  }
  */

  extends: ['plugin:vue/essential', '@vue/standard'],

  /* rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  }, */

  parserOptions: {
    parser: 'babel-eslint'
  }
}
