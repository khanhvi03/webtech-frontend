<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello">
    <h1>
      Welcome to my project!
    </h1>
  </div>
</template>

<style scoped>
h1 {
    min-height: 10vh;
    display: flex;
  }
</style>
