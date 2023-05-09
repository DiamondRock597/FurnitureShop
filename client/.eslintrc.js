module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
    },
  },
  extends: [
    '@react-native-community',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    'eslint-comments/no-use': ['error', { allow: [] }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'import/no-unassigned-import': [2, { allow: ['react-native-gesture-handler'] }],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'no-magic-numbers': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    'import/no-unresolved': 'off',
    curly: 'error',
    'no-new-func': 'error',
    'no-cond-assign': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'no-template-curly-in-string': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    'no-return-await': 'error',
    'no-sparse-arrays': 'error',
    'dot-notation': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-unneeded-ternary': 'error',
    'prefer-object-spread': 'error',
    'default-case': 'error',
    eqeqeq: 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'eol-last': ['error', 'always'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error'],
    'import/named': 'error',
    'max-len': ['error', { code: 150 }],
    '@typescript-eslint/member-ordering': ['error'],
    'no-nested-ternary': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          unknown: 'error',
          any: 'error',
          object: 'error',
          '{}': 'error',
        },
      },
    ],
  },
};
