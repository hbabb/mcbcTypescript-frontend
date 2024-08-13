// mcbc-react-ts/stylelint.config.mjs
/** @type {import('stylelint').Config} */
import stylelintConfigStandardScss from 'stylelint-config-standard-scss';
import stylelintOrder from 'stylelint-order';
import stylelintScss from 'stylelint-scss';
import stylelintPrettier from 'stylelint-prettier';

export default {
  extends: [
    'stylelint-config-standard-scss', // Provides standard rules for SCSS
    'stylelint-prettier/recommended', // Ensures Prettier rules are applied last
  ],
  plugins: [
    'stylelint-order', // Plugin to enforce the order of properties
    'stylelint-scss', // SCSS-specific linting rules
    'stylelint-prettier', // Integrates Prettier with Stylelint
  ],
  rules: {
    'prettier/prettier': true, // Ensures Prettier formatting is enforced
    'order/properties-alphabetical-order': true, // Ensure properties are ordered alphabetically

    // Rule to enforce camelCase naming convention
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',

    // Disable the no-descending-specificity rule as it is not compatible with Prettier
    'no-descending-specificity': null,
    

    // SCSS-specific rules
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z0-9-]+$',
    'scss/operator-no-unspaced': true,
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*.css', 'TODO.md', 'Notes.md', 'stylelint.config.mjs', 'tsconfig.json', 'tsconfig.build.json', 'tsconfig.eslint.json', 'vite.config.ts', 'postcss.config.cjs', 'package.json', '.prettierrc', 'commitlint.config.mjs'], // Ignore specific folders
};
