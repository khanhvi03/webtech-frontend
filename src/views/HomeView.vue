<template>
  <header>
    <Navbar />
  </header>

  <main>
    <div class="px-4 my-5">
      <Posts/>
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Posts from "@/components/Post/Posts.vue";
</script>

<style scoped></style>
