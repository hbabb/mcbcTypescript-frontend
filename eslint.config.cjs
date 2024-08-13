// mcbcTypescript/eslint.config.cjs

const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const typescriptEslintParser = require('@typescript-eslint/parser');

/** @type {import('eslint').FlatConfig[]} */
const config = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptEslintParser,
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'stylelint.config.mjs', 'tsconfig.json', 'tsconfig.build.json', 'tsconfig.eslint.json', 'vite.config.ts', 'postcss.config.cjs', 'package.json', '.prettierrc', 'commitlint.config.mjs'],
  },
];

module.exports = config;
