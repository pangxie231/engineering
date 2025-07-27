<script setup>
import { ref } from 'vue';

const hello = ref('hello world')
</script>

<template>
  <div>
    {{ hello }}
  </div>
</template>

<style scoped lang="postcss">
.a {
  color: red;
}
</style>