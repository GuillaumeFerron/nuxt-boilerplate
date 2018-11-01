module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'plugin:vue/essential',
    'airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'import/no-unresolved': 'off',
    'object-curly-spacing': 'off'
  }
}
