module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 4, {
      'SwitchCase': 1,
    }],
    '@typescript-eslint/indent': ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/prop-types': 0,
    'react/jsx-indent-props': ['error', 4],
    "object-curly-newline": ["error", {
        "ObjectExpression": { "multiline": true, "minProperties": 2 },
        "ObjectPattern": { "multiline": true },
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 },
    }],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-use-before-define': 0, // styles are on the end of file
  },
};
