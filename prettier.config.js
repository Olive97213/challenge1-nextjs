/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  semi: false,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
}
