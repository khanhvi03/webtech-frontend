<script setup lang="ts">

import SideBar from "@/components/SideBar.vue";
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="row justify-content-evenly">
    <div class="col col-2">
      <SideBar/>
    </div>
    <div class="col col-10  w-75 d-flex align-self-center">
    <div class="row p-4">
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">POSTS</h5>
            <p class="card-text">Here you can view, update, add and delete posts.</p>
            <router-link to="/dashboard/posts" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">SUBMISSIONS</h5>
            <p class="card-text">Here you can view all submissions.</p>
            <router-link to="/dashboard/submissions" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> CREATE POSTS</h5>
            <p class="card-text">Here you can create new posts.</p>
            <router-link to="/dashboard/post/new" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PROFILE</h5>
            <p class="card-text">Here you can see your profile.</p>
            <router-link to="/profile" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>



</template>

<style scoped>

</style>
