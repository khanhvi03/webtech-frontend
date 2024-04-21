<template>
  <div class="text-dark mx-3">
    <div class="row row-cols-1 row-cols-lg-3 g-4">
      <h4 class="ms-1 text-secondary" v-if="posts.length === 0">Loading...</h4>
      <div class="col" v-for="post in posts" :key="post.id">
        <div :post="post">
          <div class="card border-dark" id="p">
            <div class="card-body">
              <router-link class="text-decoration-none" id="title" :to="{ name: 'PostDetails', params: { id : post.id } }">
                <h4 class="card-title pb-1">{{ post.title }}</h4>
              </router-link>
              <p class="card-subtitle text-body text-black pb-3">
                {{ formatDateTime(post.updatedOn) }} by <span class="text-body-emphasis fw-semibold">{{ post.author }}</span>
              </p>
              <p class="card-text">{{ post.content.substring(0, 90) }}...</p>
              <router-link :to="{ name: 'PostDetails', params: { id : post.id } }" class="link-secondary mt-2">Read more</router-link>
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

const sortOption = ref('title');

const sortPosts = () => {
  const sorted = [...posts.value];
  sorted.sort((a, b) => {
    if (sortOption.value === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption.value === 'author') {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });
  posts.value = sorted;
};

// Lifecycle hooks
onMounted(() => {
  loadPosts()
})
</script>

<style>
#header{
  color: #11009e;
  font-family: "Poppins SemiBold", sans-serif;
  font-weight: bold;
}
#title{
  color: #332FD0;
}
</style>
