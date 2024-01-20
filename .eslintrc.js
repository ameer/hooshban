module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {

    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', '@nuxtjs/eslint-config-typescript'],
  plugins: ['vue', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: [
          'self'
        ]
      }
    ]
  }
}
