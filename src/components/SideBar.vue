<template>
  <header class="mt-4">
      <div class="d-flex justify-content-center">
        <button class="btn btn-bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="true" aria-controls="navbarNavDropdown">
          <i class="fs-4 bi bi-list"></i>
        </button>
        <h2 class="d-none d-md-inline text-start ms-2 mt-2 display-6" id="menu">MENU</h2>
      </div>

      <div class="nav-scroller " id="navbarNavDropdown">
        <div class="container p-4 navbar-nav text-start">
          <router-link to="/" class="nav-link nav-item active mx-2"> <i class="fs-4 bi-house"></i>
            <span class="ms-lg-1 d-none d-md-inline">Home</span> </router-link>
          <router-link class="nav-link nav-item active mx-2" to="/dashboard"> <i class="fs-4 bi-speedometer2"></i>
            <span class="ms-lg-1 d-none d-md-inline">Dashboard</span></router-link>
          <router-link to="/dashboard/posts" class="nav-link nav-item active mx-2"> <i class="fs-4 bi-file-earmark-text"></i>
            <span class="ms-lg-1 d-none d-md-inline">Posts</span></router-link>
          <router-link to="/dashboard/submissions" class="nav-link nav-item active mx-2"> <i class="fs-4 bi bi-chat-left-quote"></i>
            <span class="ms-lg-1 d-none d-md-inline">Submissions</span></router-link>
          <router-link to="/dashboard/post/new" class="nav-link nav-item active mx-2"> <i class="fs-4 bi bi-pencil-square"></i>
            <span class="ms-lg-1 d-none d-md-inline">Create Posts</span></router-link>
          <hr>
          <div class="dropdown">
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

  </header>

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
.btn-bg{
  background-color: #E0F4FF;
}
#menu{
  font-family: "Poppins Bold",sans-serif;
}
.nav{
  font-family: 'Poppins', sans-serif;
  color: #525151;
}
.nav-link.router-link-active {
  color: #000000;
  font-weight: bolder;
  border-radius: 0.5rem;
}

</style>
