// import { a } from './a'
import Mybutton from './Mybutton.vue'
import { createApp } from 'vue'

function hello() {
  console.log('雷猴呀')
  return ''
}
hello()

createApp(Mybutton).mount('#app')