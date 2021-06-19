module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],

  rules: {
    'quotes': ['error', 'single'],
    'arrow-body-style': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'import/extensions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'error',
    'prettier/prettier': ['error'],
  },
};
