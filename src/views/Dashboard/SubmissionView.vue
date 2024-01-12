<script setup lang="ts">
import Submission from '@/components/Submissions.vue'
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="row justify-content-evenly">
    <div class="col col-2">
      <SideBar/>
    </div>
    <div class="col col-10 w-75">
      <Submission/>
    </div>
  </div>
</template>

<style scoped></style>
