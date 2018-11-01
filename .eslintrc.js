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
    'object-curly-spacing': 'off',
    'no-extra-boolean-cast': 'off',
    'vue/script-indent': ["error", 2, {"baseIndent": 1}]
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "vue/script-indent": "off"
      }
    },
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};
