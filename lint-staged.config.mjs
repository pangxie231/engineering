/**
 * @type {import('lint-staged').Configuration}
 */
export default { 
  '*.vue': ['prettier --list-different']
}