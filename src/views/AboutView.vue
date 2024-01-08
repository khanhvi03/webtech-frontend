<template>
  <div class="about">
    <div class="about-container">
      <h1>
        <span style="color: #ff0000;">Object A</span> is an independent online and print publishing house founded in Berlin. 
        Our House is open to submissions from authors worldwide, with or without prior writing experience. 
        We offer our platform to all registered users.
      </h1>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');

.about {
  background-color: #f0f0f0; /* Gray background */
}

.about-container {
  max-width: 800px;
  margin: 0 auto; /* Center the content horizontally */
  padding: 20px;
  font-family: 'Rubik Spray Paint', sans-serif;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
}
</style>
