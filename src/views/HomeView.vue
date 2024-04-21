<template>
  <header>
    <Navbar />
  </header>
  <h2 class="mb-4 pb-4 display-4 text-emphasis text-center pt-5 " id="header">PUBLICATIONS</h2>
  <main class=" mt-5 mx-4 pb-5">
      <Posts/>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Posts from "@/components/Post/Posts.vue";
</script>

<style scoped></style>
