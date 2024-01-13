<template>
  <header>
    <Navbar />
  </header>

  <main class="mt-5 mx-4 pb-5">
      <Posts/>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Posts from "@/components/Post/Posts.vue";
</script>

<style scoped></style>
