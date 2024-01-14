<template>
  <div class="px-5">
    <h2 class="mb-4 pb-4 display-4 text-emphasis text-center" id="header">PUBLICATIONS</h2>
    <div class="row row-cols-1 g-4 justify-content-center">
      <h4 class="ms-1 text-secondary" v-if="posts.length === 0">Loading...</h4>
      <div class="col" v-for="post in posts" :key="post.id">
        <div :post="post">
          <div class="card" id="p">
            <div class="card-body">
              <router-link class="text-decoration-none" id="title" :to="{ name: 'PostDetails', params: { id : post.id } }">
                <h4 class="card-title pb-1">{{ post.title }}</h4>
              </router-link>
              <p class="card-subtitle text-body text-black">
                {{ formatDateTime(post.updatedOn) }} by <span class="text-body-emphasis fw-semibold">{{ post.author }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {Ref} from 'vue'
import {onMounted, ref} from 'vue'
import type {AxiosResponse} from 'axios'
import axios from 'axios'
import type {Post} from "@/types"

const posts: Ref<Post[]> = ref([])

async function loadPosts() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
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
#header{
  color: #11009e;
  font-family: "Poppins SemiBold", sans-serif;
}
#title{
  color: #332FD0;
}
</style>
