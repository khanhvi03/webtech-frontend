<template>
  <div class="row justify-content-evenly">
    <div class="col col-2">
      <SideBar/>
    </div>

    <div class="col col-10 w-75">
      <div class="container mt-4 justify-content-center w-75">
        <h1 class="text-center display-2 pb-4" id="header">Create Post</h1>
        <div id="postAlertPlaceholder" class="mb-3"></div>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="titleField" required type="text" class="form-control" id="title" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Author</label>
          <input v-model="authorField" required type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="post-input" class="form-label">Content</label>
          <textarea v-model="contentField" required class="form-floating form-control"
                    id="submission-input" style="height: 200px" ></textarea>
        </div>

        <div class="mb-5">
          <button @click="save" type="button" class="btn btn-primary mt-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import {ref} from 'vue'
import axios from 'axios'

const titleField = ref('')
const authorField = ref('')
const contentField = ref('')

  async function save() {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
    const endpoint = baseUrl + '/api/posts'

  const data = {
    title: titleField.value,
    author: authorField.value,
    content: contentField.value
  }

    try {
      await axios.post(endpoint, data)
      console.log('Save successful!')

      // Append a success alert
      const alertPlaceholder = document.getElementById('postAlertPlaceholder')
      if (alertPlaceholder) {
        appendAlert('Created Post Successfully!', 'success')
      }
    } catch (error) {
      console.error('Save failed:', error)

      // Append an error alert
      const alertPlaceholder = document.getElementById('postAlertPlaceholder')
      if (alertPlaceholder) {
        appendAlert('Create failed. Please try again.', 'danger')
      }
    }

    function appendAlert(message, type) {
      const alertPlaceholder = document.getElementById('postAlertPlaceholder')
      if (!alertPlaceholder) return

      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
      alertPlaceholder.append(wrapper)
    }
  }
</script>


<style scoped>
#header{
  font-family: "Poppins",sans-serif;
  color: #11009e;
}
</style>
