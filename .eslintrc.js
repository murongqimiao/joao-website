module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2, {
      'MemberExpression': 'off'
    }],
    'eol-last': 0,
    'no-undef': 0,
    'eqeqeq': 0,
    'no-unused-vars': 0,
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], // 注释格式
    'comma-dangle':0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
