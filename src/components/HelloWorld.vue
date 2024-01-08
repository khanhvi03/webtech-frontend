<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="hello">
    <h1 class="brutalist-font">
      Become an Object A writer
    </h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');

h1.brutalist-font {
  min-height: 10vh;
  display: flex;
  margin-left: 140px;
  font-family: 'Rubik Spray Paint', sans-serif; /* Change to Rubik Spray Paint */
  transform: skewX(-4deg); /* Adjust the skew degree as needed */
  font-size: 64px; /* Adjust the font size (height) as needed */
}
</style>
