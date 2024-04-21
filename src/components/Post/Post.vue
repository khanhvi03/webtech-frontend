<template>
  <div class="container justify-content-center">
    <div class="p-3 mb-2 align-content-center">
        <!-- Post header-->
        <header class="mb-4 text-center">
          <!-- Post title-->
          <h1 class="display-3 text mb-3 fw-semibold" id="t">{{ post.title }}</h1>
          <!-- Post meta content-->
          <p class="mb-2 ms-2">Published on {{ formatDateTime(post.publishedOn) }} </p>
          <div class="text-muted fst-italic">By {{ post.author }}</div>
        </header>
          <!-- Post content-->
          <p class="d-flex justify-content-center p-2 px-5" style="white-space: pre-line;">{{ post.content }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import {onMounted, Ref, ref} from 'vue'
import type {AxiosResponse} from 'axios'
import axios from 'axios'
import {useRoute} from "vue-router";
import {Post} from "@/types";

const post: Ref<Post> = ref([])
const postId = useRoute().params;

// Fetch the post details when the component is mounted
async function getPostDetails() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = `${baseUrl}/api/posts/${postId.id}`

  try {
    const response: AxiosResponse = await axios.get(endpoint)
    post.value = response.data
  } catch (error) {
    console.error('Failed to load post:', error)
  }
}


function formatDateTime(dateTimeString: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(dateTimeString).toLocaleDateString(undefined, options)
}

onMounted(() => {
  getPostDetails()
})
</script>

<style>
#t{
  color: #11009e;
}
</style>
