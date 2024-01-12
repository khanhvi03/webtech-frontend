<script setup lang="ts">
//import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import {oktaSignIn} from '../main'
import {nextTick, onMounted, onUnmounted} from 'vue'
import NavBar from "@/components/NavBar.vue";

onMounted(() => {
  nextTick(() => {
    oktaSignIn.showSignInAndRedirect(
        { el: '#okta-signin-container' },
    )
  })
})

onUnmounted(() => {
  oktaSignIn.remove()
})

</script>

<template>
  <header> <NavBar/></header>
  <main class="container mt-5">
    <div class="d-flex justify-content-evenly">
      <div class="login ">
        <div id="okta-signin-container"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container{
  max-width: 1280px;
}
</style>
