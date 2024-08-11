// mcbc-react-ts\stylelint.config.mjs
/** @type {import('stylelint').Config} */
const stylelintConfigStandard = import('stylelint-config-standard');
const stylelintConfigPrettier = import('prettier-stylelint');
import stylelintOrder from 'stylelint-order';

export default {
  extends: [stylelintConfigStandard],
  plugins: [stylelintConfigPrettier, stylelintOrder],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': 'always',
    'block-no-empty': true,
    'unit-white-list': ['em', 'rem', 's', '%'],
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'max-line-length': 80,
    indentation: 2,
  },
  defaultSeverity: 'warning',
  ignoreFiles: ['node_modules/**/*', 'dist/**/*.css'],
  formatter: 'prettier-stylelint',
}
