<template>
  <main class="pt-5 mx-2">
    <router-link to="/" class="ms-3 btn btn-outline-dark">
      <i class="bi bi-arrow-left"></i>
      <span class="ms-lg-1 d-none d-md-inline">Home</span></router-link>
    <Post/>
  </main>
</template>

<script setup lang="ts">
import Post from "@/components/Post/Post.vue";
import {RouterLink} from "vue-router";
</script>

<style scoped></style>
