/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    plugins: ['react', 'jsx-a11y', 'unused-imports', 'mui-path-imports'],
    extends: [
      'plugin:import/recommended',
      'plugin:jsx-a11y/strict',
      'plugin:unicorn/recommended',
      'xo',
      'xo-react',
      'plugin:storybook/recommended',
      'plugin:@tanstack/eslint-plugin-query/recommended',
      // `prettier` は必ず最後に追加する
      // https://github.com/prettier/eslint-config-prettier#installation
      'prettier',
    ],
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      // built-in
      'capitalized-comments': 'off',
      'no-restricted-imports': [
        'error',
        {
          // 相対パスを禁止する
          patterns: ['./', '../'],
        },
      ],
  
      // react
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-pascal-case': ['error', { allowNamespace: true }],
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
  
      // import
      'import/no-default-export': 'error',
      'import/extensions': [
        'error',
        {
          js: 'never',
          cjs: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          cts: 'never',
          mts: 'never',
          tsx: 'never',
          css: 'always',
          json: 'always',
          svg: 'always',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
  
      // unicorn
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-top-level-await': 'off',
  
      // unused-imports
      'unused-imports/no-unused-imports': 'error',
  
      // mui-path-imports
      'mui-path-imports/mui-path-imports': 'error',
    },
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['*.cjs'],
        parserOptions: {
          sourceType: 'script',
        },
      },
      {
        extends: ['xo-typescript', 'prettier'],
        files: ['*.ts', '*.tsx'],
        rules: {
          // @typescript-eslint
          '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
          '@typescript-eslint/array-type': [
            'error',
            {
              default: 'array',
              readonly: 'array',
            },
          ],
        },
      },
      {
        files: ['*.d.ts'],
        rules: {
          '@typescript-eslint/triple-slash-reference': 'off',
          '@typescript-eslint/consistent-type-definitions': 'off',
        },
      },
    ],
    ignorePatterns: ['**/gen/**', 'orval.config.ts'],
  };
  