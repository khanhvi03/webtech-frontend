<template>
  <h3>User Registration</h3>
  <div>
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="button" @click="registerUser">Register</button>
  </div>

  <div>
    <h3>Registered Users</h3>
    <ul v-if="users.length === 0">
      <li>No users yet</li>
    </ul>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.username }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

defineProps<{
  title: string
}>()

type User = { id?: number; username: string; email: string; password: string }

const users = ref<User[]>([])
const username = ref('')
const email = ref('')
const password = ref('')

function loadUsers() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
  const endpoint = `${baseUrl}/api/users`
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow'
  }

  fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        users.value = result
      })
      .catch((error) => console.log('error', error))
}

function registerUser() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
  const endpoint = `${baseUrl}/api/users`
  const data: User = {
    username: username.value,
    email: email.value,
    password: password.value
  }
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration success:', data)
        // Update the user list after registration
        loadUsers()
      })
      .catch((error) => console.log('Registration failed', error))
}

// Lifecycle hooks
onMounted(() => {
  loadUsers()
})
</script>

<style scoped>
form > div {
  margin-bottom: 30px;
}
input,
button {
  display: block;
  margin-bottom: 10px;
}
button {
  color: blue;
  cursor: pointer;
}
</style>
