<script setup>
import { ref } from 'vue';

const hello = ref('hello world')

const name = ref('')

const test = 'jg6'
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