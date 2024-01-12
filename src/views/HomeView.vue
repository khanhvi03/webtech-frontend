<template>
  <header>
    <Navbar />
  </header>

  <main>
    <div class="p-4 mx-5">
      <HelloWorld/>
    </div>
  </main>

</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped></style>
