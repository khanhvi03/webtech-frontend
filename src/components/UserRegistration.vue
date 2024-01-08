<!-- UserRegistration.vue -->
<template>
  <div class="user-registration">
    <h3 class="skewed-text" style="margin-bottom: 10px;">User Registration</h3>
    <div v-if="!isLoggedIn" class="registration-form">
      <input v-model="username" placeholder="Username" type="text" class="input-field">
      <input v-model="email" placeholder="Email" type="email" class="input-field">
      <input v-model="password" placeholder="Password" type="password" class="input-field">
      <button type="button" @click="registerUser" class="register-button">Register</button>
    </div>

    <div v-if="isLoggedIn">
      <h3 class="skewed-text" style="margin-left: 20px;">Registered Users</h3>
      <ul v-if="users.length === 0">
        <li>No users yet</li>
      </ul>
      <ul v-else>
        <li v-for="user in users" :key="user.id" class="skewed-text">
          {{ user.username }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{
  title: string;
}>();

type User = { id?: number; username: string; email: string; password: string };

const users = ref<User[]>([]);
const username = ref('');
const email = ref('');
const password = ref('');
const isLoggedIn = ref(false);

function loadUsers() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL; // 'http://localhost:8080' in dev mode
  const endpoint = `${baseUrl}/api/users`;
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      users.value = result;
    })
    .catch((error) => console.log('error', error));
}

function registerUser() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL; // 'http://localhost:8080' in dev mode
  const endpoint = `${baseUrl}/api/users`;
  const data: User = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('Registration success:', data);
      isLoggedIn.value = true; // Set the isLoggedIn flag to true after successful registration
      // Update the user list after registration
      loadUsers();
    })
    .catch((error) => console.log('Registration failed', error));
}

// Lifecycle hooks
onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
.user-registration {
  margin: 20px;
  padding: 30px;
  background-color: #f0f0f0; /* Light gray background */
  margin-left: 70px;
  margin-top: 30px;

}

.registration-form {
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
}

.input-field {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
}

.register-button {
  background-color: #001a57; /* Yves Klein Blue */
  color: white;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border: none;
}

.skewed-text {
  transform: skewX(-2deg); /* Adjust the skew degree as needed */
}

.register-button:hover {
  background-color: #003366; /* Darker shade on hover */
}
</style>