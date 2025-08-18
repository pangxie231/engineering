/**
 * @type {import('lint-staged').Configuration}
 */
export default { 
  '*.{js,ts,vue}': ['eslint --fix','prettier --write'],
  '*.{css}': ['prettier --list-different']
}