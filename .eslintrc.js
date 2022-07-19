module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'vue/first-attribute-linebreak': [
      'error', {
        singleline: 'beside',
        multiline: 'beside',
      },
    ],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: [],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'space-before-function-paren': ['warn', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'arrow-parens': ['error', 'as-needed'],
  },
}