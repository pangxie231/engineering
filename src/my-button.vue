<script lang="ts" setup>
import { ref, watch } from 'vue';

const hello = ref('hello world')

const name = ref('')

var test = 'jg6'
console.log('aaa')

if (test == 'a') {
  console.log('test')
}

if (name) {

}

const obj = ref<{
  a: string
  b: number
}>({
  a: '1',
  b: 1
})

</script>

<template>
  <div>
    {{ hello }}
    {{ test }}
    <input v-model="name" type="text">
    <!-- <input v-model="name" type="text"> -->
  </div>
</template>

<style scoped lang="scss">
.a {
  color: red;
}
</style>