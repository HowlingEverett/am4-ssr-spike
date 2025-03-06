const { tseslint } = require('@ftr/code-standards')

module.exports = tseslint.config(
  require('@ftr/code-standards/configs/eslint'),
  {
    ignores: ['coverage/', 'dist/'],
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-return': 'warn',
    },
  },
)
