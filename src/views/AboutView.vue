<template>
  <header>
    <Navbar />
  </header>

  <main class="mt-5">
    <div class="container my-4">
      <div class="position-relative p-4 text-center text-muted bg-body border border-dashed rounded-5">
        <h4 class="display-4 text-emphasis mb-5" id="title">WHO WE ARE & WHAT WE DO</h4>
        <p class="col-6 mx-auto mb-5" id="about">
          <span class="brand">Penhub</span> is an independent online and print publishing house founded in Berlin.
          We are open to submissions from authors worldwide, with or without prior writing experience
          and offer our platform to all users. You can purchase our half-early Zines featuring editor's selection of works submitted to us.
        </p>
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
</script>

<style scoped>
#title{
  color: #11009e;
  font-family: "Poppins SemiBold", sans-serif;
}
#about {
  font-family: 'Poppins', serif;
  font-size: 20px;
}
.brand{
  color: #11009e;
  font-weight: bold;
  font-family: "Poppins Light 300", sans-serif;
}
</style>
