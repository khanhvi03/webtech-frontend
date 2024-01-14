<template>
  <div class="container-fluid p-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <nav class="navbar navbar-expand-lg navbar-bg" id="header">
            <!-- Navbar Toggle Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div class="col-4 text-center">
          <!-- Logo and Title -->
          <a href="/" class="d-flex align-items-center justify-content-center" id="logo">

            <span class="ms-1" style="font-weight: lighter">Penhub</span>
          </a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <!-- Login Link -->
          <router-link class="btn btn-md btn-outline-primary" to="/login" v-if="!authenticated">Login</router-link>
          <div class="dropdown" v-if="authenticated">
            <a href="#" class="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fs-2 bi-person-circle h2"></i>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
              <li><router-link to="/profile" class="dropdown-item">Profile</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" v-on:click="logout()">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="d-none d-lg-block" id="menu">
        <div class=" mt-3 border-bottom border-top">
          <nav class="nav justify-content-center">
            <!-- Home Page -->
            <router-link class="nav-item nav-link active" to="/">Home</router-link>
            <!-- About Page -->
            <router-link class="nav-item nav-link active" to="/About">About</router-link>
            <!-- Submit Page -->
            <router-link class="nav-link nav-item active" to="/Submit">Submit</router-link>
            <!-- Store Page -->
            <router-link class="nav-link nav-item active" to="/Store">Store</router-link>
            <router-link class="nav-link nav-item active" to="/dashboard" v-if="authenticated">Dashboard</router-link>
          </nav>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="navbar-nav text-center">
          <router-link class="nav-item nav-link active" to="/">Home</router-link>
          <router-link class="nav-item nav-link active" to="/About" v-if="!authenticated">About</router-link>
          <router-link class="nav-link nav-item active" to="/Submit" v-if="!authenticated">Submit</router-link>
          <router-link class="nav-link nav-item active" to="/Store">Store</router-link>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, useRoute} from 'vue-router'
import {onMounted, ref, watch} from 'vue'
import {useAuth} from '@okta/okta-vue'

const $auth = useAuth()
const $route = useRoute()
const authenticated = ref(false)
async function logout() {
  await $auth.signOut()
}
async function isAuthenticated() {
  authenticated.value = await $auth.isAuthenticated()
}
watch(
    () => $route.path,
    async () => {
      await isAuthenticated()
    }
)
onMounted(async () => {
  await isAuthenticated()
  $auth.authStateManager.subscribe(isAuthenticated)
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');


#logo {
  font-family: 'Rubik Spray Paint', sans-serif;
  font-size: 70px;
  text-decoration: none;
  color: #11009e;
}
#menu {
//background-color: #e4f1ff;
  font-size: large;
}

.nav-link {
  font-family: 'Poppins', sans-serif;
  color: #525151;
}
.nav-link.router-link-active {
  color: #000000;
  font-weight: bolder;
  border-radius: 1rem;
}

</style>
