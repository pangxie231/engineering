import { a } from './a'
import Mybutton from './my-button.vue'
import { createApp } from 'vue'

function hello() {
  // console.log('雷猴呀!')

  console.log('构建时间：', Date.now())
  return ''
}
hello()
a()

var test = ''

if (test == 'abc') {
  console.log('test')
}

createApp(Mybutton).mount('#app')
