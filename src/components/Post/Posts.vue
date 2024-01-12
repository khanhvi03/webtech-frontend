<template>
  <main class="px-5 w-75">
  <h2 class="mb-4 display-4 text-emphasis" id="header">PUBLICATIONS</h2>
  <div class="row row-cols-1 g-4">
    <h4 class="ms-1 text-secondary"  v-if="posts.length === 0">Loading...</h4>
    <div class="col" v-for="post in posts" :key="post.id">
      <div :post="post">
      <div class="card h-100" id="p">
        <div class="card-body">
          <h4 class="card-title pb-2">{{ post.title }}</h4>
          <h6 class="card-subtitle px-1 text-body-secondary">
            {{ formatDateTime(post.publishedOn)}} by <span class="text-body-emphasis">{{ post.author }}</span>
          </h6>
          <a href="#" class="icon-link pt-1" data-bs-toggle="collapse" :data-bs-target="'#collapseContent' + post.id" aria-expanded="false" aria-controls="collapseContent">
            <i class="bi bi-chevron-expand fs-5"></i> <span class=" pt-2 d-inline">Continue reading</span>
          </a>
          <div :id="'collapseContent' + post.id" class="collapse pt-3 px-1">
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </main>
</template>


<script setup lang="ts">
import type {Ref} from 'vue'
import {onMounted, ref} from 'vue'
import type {AxiosResponse} from 'axios'
import axios from 'axios'
import type {Post} from "@/types"

const posts: Ref<Post[]> = ref([])

async function loadPosts() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // Replace with your actual backend URL
  const endpoint = `${baseUrl}/api/posts`

  try {
    const response: AxiosResponse = await axios.get(endpoint)
    posts.value = response.data
  } catch (error) {
    console.error('Failed to load posts:', error)
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

// Lifecycle hooks
onMounted(() => {
  loadPosts()
})
</script>

<style>
#p{
  font-family: "Poppins", sans-serif;
}
</style>
