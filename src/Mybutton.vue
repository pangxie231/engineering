<script setup lang="ts">
import { ref } from 'vue';

const hello = ref('hello world')

const name = ref('')
</script>

<template>
  <div>
    {{ hello }}
    <input v-model="name" type="text">
  </div>
</template>

<style scoped lang="scss">
.a {
  color: red;
}
</style>