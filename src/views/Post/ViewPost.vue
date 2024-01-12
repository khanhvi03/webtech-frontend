<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import PostList from "@/components/Post/PostList.vue";
</script>

<template>
  <div class="row justify-content-evenly">
    <div class="col col-2">
      <SideBar/>
    </div>
    <div class="col col-10 w-75">
      <PostList/>
    </div>
  </div>
</template>

<style scoped></style>



