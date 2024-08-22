module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: [
    'react-refresh',
    "react-hooks",
    "prettier",
    "@typescript-eslint",
    "react",
    '@stylistic/js',
    "simple-import-sort"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "react/jsx-curly-brace-presence": "error",
    "no-console":"error",
    "arrow-body-style": ["error", "as-needed"],
    "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
    "simple-import-sort/imports": ["error", {
      groups: [
        ['^react', '^\\w', '^@hookform', '^@radix-ui', '^@reduxjs'],
        ['^@api(/.*|$)'],
        ['^@store(/.*|$)'],
        ['^@components(/.*|$)'],
        ['^@pages(/.*|$)'],
        ['^@helpers(/.*|$)'],
        ['^@constants(/.*|$)'],
        ['^@assets(/.*|$)'],
        ['^@locales(/.*|$)'],
        ['^@router(/.*|$)'],
        ['^@customTypes(/.*|$)'],
        ['^\\u0000'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^@styles(/.*|$)'],
        ['^.+\\.?(scss)$'],
      ]
    }],
    "max-lines": ["error", {"max": 300, "skipBlankLines": true, "skipComments": true}]
  },

}
