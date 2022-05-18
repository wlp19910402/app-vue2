module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-underscore-dangle': 'off',
    camelcase: [
      'error',
      {
        allow: [
          '__webpack_public_path__',
          '__INJECTED_PUBLIC_PATH_BY_QIANKUN__',
          '__POWERED_BY_QIANKUN__',
        ],
      },
    ],
  },
};
