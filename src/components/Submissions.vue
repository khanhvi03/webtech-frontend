<template>
  <div class="container justify-content-center py-4">
    <h1 class="text-center display-2 pb-4" id="title">Submissions</h1>
    <table class="table table-hover ">
      <thead>
      <tr>
        <th>Title</th>
        <th>Name</th>
        <th>Email</th>
        <th>Content</th>
        <th>Submitted On</th>
        <th></th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
      <tr v-if="submissions.length === 0">
        <td colspan="6">Loading...</td>
      </tr>
      <tr v-for="submission in submissions" :key="submission.id">
        <td>{{ submission.title }}</td>
        <td>{{ submission.name }}</td>
        <td> <a href="#">{{ submission.email }}</a> </td>
        <td>
          <div>
            {{ submission.content.substring(0, 40) }}...
            <button class="btn btn-sm ms-1 " data-bs-toggle="offcanvas" :data-bs-target="'#contentOffcanvas' + submission.id" aria-controls="contentOffcanvas">
              <i class="bi bi-arrows-angle-expand fs-7 ms"></i>
            </button>
          </div>
          <!-- Offcanvas for full content -->
          <div class="offcanvas offcanvas-end" :id="'contentOffcanvas' + submission.id" aria-labelledby="contentOffcanvasLabel" tabindex="-1">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="contentOffcanvasLabel">Full Content</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              {{ submission.content }}
            </div>
          </div>
        </td>
        <td>{{ formatDateTime(submission.submitOn) }}</td>
        <td><button class="btn btn-sm btn-outline-danger" @click="deleteSubmission(submission.id)">
          <i class="bi bi-trash-fill"></i>
        </button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import {onMounted, ref} from 'vue';
import type {AxiosResponse} from 'axios';
import axios from 'axios';
import type {Submission} from '@/types';

const submissions: Ref<Submission[]> = ref([]);

async function loadSubmissions() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const endpoint = `${baseUrl}/submission`;

  try {
    const response: AxiosResponse = await axios.get(endpoint);
    submissions.value = response.data;
  } catch (error) {
    console.error('Failed to load submissions:', error);
  }
}

async function deleteSubmission(sid: number) {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = `${baseUrl}/submission/${sid}`

  try {
    await axios.delete(endpoint)
    alert("Deleted");
    loadSubmissions()
  } catch (error) {
    console.error(`Failed to delete post with ID ${sid}:`, error)
  }
}

  function formatDateTime(dateTimeString: string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(dateTimeString).toLocaleDateString(undefined, options)
  }

// Lifecycle hooks
onMounted(() => {
  loadSubmissions();
});
</script>


<style scoped>
#title{
  font-family: "Poppins",sans-serif;
  color: #11009e;
}
</style>
