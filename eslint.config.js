import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['build/**', 'node_modules/**', '.react-router/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
      },
    },
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    settings: {
      'import/internal-regex': '^~/',
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/max-len': ['error', { code: 120, tabWidth: 2 }],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'never'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'import/no-duplicates': 'error',
      'import/no-useless-path-segments': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          distinctGroup: false,
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '**/*.{css,scss}',
              patternOptions: { matchBase: true },
              group: 'index',
              position: 'after',
            },
            {
              pattern: './*.{css,scss}',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          warnOnUnassignedImports: true,
        },
      ],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
)
