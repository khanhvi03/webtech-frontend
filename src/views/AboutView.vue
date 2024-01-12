<template>
  <header>
    <Navbar />
  </header>

  <main class="mt-5">
    <div class="container my-4">
      <div class="position-relative p-4 text-center text-muted bg-body border border-dashed rounded-5">
        <h1 class="display-4 text-emphasis mb-5" id="title">ABOUT US</h1>
        <p class="col-6 mx-auto mb-5" id="about">
          <span class="brand">Penhub</span> is an independent online and print publishing house founded in Berlin.
          We are open to submissions from authors worldwide, with or without prior writing experience
          and offer our platform to all users.
          We would be very happy if you submitted your works in our website or ordered books from our site.
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
}
.brand{
  color: #11009e;
  font-weight: bold;
  font-family: "Poppins Light 300", sans-serif;
}
</style>

