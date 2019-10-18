module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "prettier/prettier": "error",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".jsx",
          ".js"
        ]
      }
    ],
  },
};
