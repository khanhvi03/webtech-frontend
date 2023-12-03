<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Welcome to my project!
    </h3>
  </div>
</template>

<style scoped>
</style>
