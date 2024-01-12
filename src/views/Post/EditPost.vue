<template>
  <div class="container mt-4 justify-content-center w-75">
    <h1 class="text-center display-2 pb-4" id="postDetailsTitle">Post Details</h1>
    <div v-if="post">
      <h2>title</h2>
      <p>Author: author</p>
      <p>content</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';

const post = ref(null);

// Fetch the post details when the component is mounted
onMounted(async () => {
  try {

    const response = await axios.get(`http://localhost:8080/api/posts/${postId}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post details:', error);
  }
});
</script>

<style scoped></style>
