<script setup>
import { ref } from 'vue';

const hello = ref('world')
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