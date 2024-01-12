<template>
  <div class="container justify-content-center py-4">
    <h1 class="text-center display-2 pb-4" id="title">Posts</h1>
    <!-- Add button for creating a new post -->
    <router-link to="/dashboard/post/new" class="btn btn-primary mb-3">Add Post</router-link>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Content</th>
        <th>Published On</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="posts.length === 0">
        <td colspan="5">Loading...</td>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.author }}</td>
        <td>
          <div>
            {{ post.content.substring(0, 35) }}...
            <button class="btn btn-sm ms-1" data-bs-toggle="offcanvas" :data-bs-target="'#contentOffcanvas' + post.id" aria-controls="contentOffcanvas">
              <i class="bi bi-arrows-angle-expand fs-7"></i>
            </button>
          </div>
          <!-- Offcanvas for full content -->
          <div class="offcanvas offcanvas-end" :id="'contentOffcanvas' + post.id" aria-labelledby="contentOffcanvasLabel" tabindex="-1">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="contentOffcanvasLabel">Full Content</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              {{ post.content }}
            </div>
          </div>
        </td>
        <td>{{ formatDateTime(post.publishedOn)}}</td>
        <td>
          <router-link :to="`/dashboard/post/:id`" class="btn btn-sm btn-outline-primary ms -2"><i class="fs-7 bi bi-pencil-square"></i></router-link>
          <button class="btn btn-sm btn-outline-danger ms-xl-2 my-2" @click="deletePost(post.id)"><i class="fs-7 bi bi-trash-fill"></i></button>
        </td>
        </tr>
      </tbody>
    </table>
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
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // Replace with your actual backend URL
  const endpoint = `${baseUrl}/api/posts`

  try {
    const response: AxiosResponse = await axios.get(endpoint)
    posts.value = response.data
  } catch (error) {
    console.error('Failed to load posts:', error)
  }
}
async function deletePost(postId: number) {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = `${baseUrl}/api/posts/${postId}`

  try {
    await axios.delete(endpoint)
    loadPosts()
  } catch (error) {
    console.error(`Failed to delete post with ID ${postId}:`, error)
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

<style scoped>
#title{
  font-family: "Poppins",sans-serif;
  color: #11009e;
}

</style>

