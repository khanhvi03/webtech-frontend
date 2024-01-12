<template>
  <div class="container px-4 my-5 justify-content-center ">
    <h1 class="mb-5 text-center display-4 text-emphasis" id="header">SUBMIT</h1>
    <h6 class="mb-3">Please fill in all fields to submit your work!</h6>
    <div id="alertPlaceholder" class="mb-3"></div>

    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input v-model="nameField" type="text" class="form-control" :class="{ 'is-invalid': !nameField }"
        placeholder="Firstname Lastname" required />
      <div class="invalid-feedback">Name is required.</div>
    </div>

    <div class="mb-3">
      <label for="email-input" class="form-label">Email</label>
      <input v-model="emailField" type="email" class="form-control" :class="{ 'is-invalid': !emailField }"
        id="email-input" placeholder="name@example.com" required/>
      <div class="invalid-feedback">Please enter a valid email address.</div>
    </div>

    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input v-model="titleField" type="text" class="form-control" :class="{ 'is-invalid': !titleField }"
        id="title" required/>
      <div class="invalid-feedback">Title is required.</div>
    </div>

    <div class="mb-3">
      <label for="submission-input" class="form-label">Content (Max 3000 characters)</label>
      <textarea v-model="contentField" class="form-floating form-control" :class="{ 'is-invalid': !contentField }"
                id="submission-input" style="height: 200px" required>
      </textarea>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck"> Agree to terms and conditions </label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>

    <div class="mb-5 mt-2">
      <button @click="submit" type="button" class="btn btn-primary mt-2" id="submit-button">
        Submit
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios'

const nameField = ref('')
const emailField = ref('')
const titleField = ref('')
const contentField = ref('')

async function submit() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
  const endpoint = baseUrl + '/submission/add'

  const data = {
    name: nameField.value,
    email: emailField.value,
    title: titleField.value,
    content: contentField.value
  }

  try {
    await axios.post(endpoint, data)
    console.log('Submission successful!')

    // Append a success alert
    const alertPlaceholder = document.getElementById('alertPlaceholder')
    if (alertPlaceholder) {
      appendAlert('Submitted successfully!', 'success')
    }
  } catch (error) {
    console.error('Submission failed:', error)

    // Append an error alert
    const alertPlaceholder = document.getElementById('alertPlaceholder')
    if (alertPlaceholder) {
      appendAlert('Submission failed. Please try again later.', 'danger')
    }
  }
}

function appendAlert(message, type) {
  const alertPlaceholder = document.getElementById('alertPlaceholder')
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
</script>

<style scoped>
#header {
  color: #11009e;
  font-family: "Poppins SemiBold", sans-serif;
}
</style>
