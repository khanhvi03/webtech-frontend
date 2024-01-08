<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<RouterView />

<template>
  <header class="centered-header">
    <div class="header-content">
      <div class="title-container">
        <div class="brand-container">
          <h1 class="brand-line brutalist-font">Object A</h1>
          <h1 class="brand-line brutalist-font">Publishing House</h1>
        </div>
      </div>
      <div class="wrapper">
        <nav class="brutalist-font">
          <img src="/Users/dariae/Desktop/HTW/webtech/objectahomevar.png" alt="Logo" class="logo" />
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/publications">Publications</RouterLink></li>
            <li><RouterLink to="/store">Store</RouterLink></li>
            <li><RouterLink to="/submit">Submit your work</RouterLink></li>
          </ul>
        </nav>
        <!-- Logo image -->
        
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');

h1.brand-line {
  margin: 0; /* Reset margin to remove default space */
}

h1.brutalist-font {
  min-height: 10vh;
  margin-left: 20px;
  font-family: 'Rubik Spray Paint', sans-serif;
  transform: skewX(-25deg);
  font-size: 48px;
}

body {
  margin: 0;
  padding: 0;
  background-color: #001a57;
}

.centered-header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #001a57;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-content {
  display: flex;
  flex-direction: column;
}

.brand-container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  display: flex;
  align-items: center; /* Center logo and menu vertically */
}

.logo {
  max-width: 115px;
  margin-left: 20px; /* Adjust as needed */
}

nav {
  text-align: center;
  margin-left: 30px;
  
}

nav ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

nav li {
  display: block;
  margin-bottom: 10px;
  margin-top: 0px;
}

nav a {
  color: white;
  font-family: 'Rubik Spray Paint', sans-serif;
  text-decoration: none;
  margin-left: 20px; /* Adjust the space between menu items */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: 8rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
