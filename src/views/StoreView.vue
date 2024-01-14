<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <Navbar/>
    <div class="purchase-info-container container-fluid">
      <p class="main-heading text-white p-1 mx-5">
        If you want to purchase our Zine, please PayPal 12€ to
        <span style="color: #ff8c00">penhub@gmail.com</span>
        with your address in the description and the # of the Zine you want to purchase. Shipping
        is included in the price. We only ship in Europe.
      </p>
    </div>
  </header>
  <main>
    <div class="container-fluid mt-5" id="zine-container">
      <div class="store">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 justify-content-center">

          <!-- Zine #1 -->
          <div class="col zine bigger-zine">
            <img src="@/assets/p1.jpg" width="400" height="500">
            <h4>Object A #1, 2023</h4>
            <p>Editors' selection of works submitted in 2023.</p>
          </div>

          <!-- Zine #2 -->
          <div class="col zine bigger-zine">
            <img src="@/assets/p2.jpg" width="400" height="500">
            <h4>Object A #2, 2024</h4>
            <p>Editors' selection of works submitted in 2024.</p>
          </div>

        </div>
        <!-- Purchase information container -->
        <div class="purchase-info-container" style="background-color: white; color: #11009e;">
          <div class="purchase-info">
            <h4 class="info-text px-3">
              Each Zine is printed in Berlin and has about 50-80 pages of selected works submitted to
              Penhub throughout the year.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.store {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Add a gray background to the container */
.zine-container {
  background-color: #d2d2d2;
  padding: 20px; /* Add padding to create space */
}

.purchase-info-container {
  background-color: #11009e; /* Yves Klein Blue */
  text-align: center;
  color: white;
  font-size: 20px; /* Adjust the size as needed */
}

.bigger-info {
  font-size: 20px; /* Adjust the size as needed */
}

.zine {
  margin: 20px;
  text-align: center;
}

.bigger-zine {
  margin: 40px; /* Make the margin twice as big */
  text-align: center;
}

.zine h4 {
  font-family: 'Rubik Spray Paint', sans-serif; /* Use Rubik Spray Paint for Zine titles */
  margin-top: 10px; /* Add margin to create space between image and title */
}

.zine img {
  max-width: 100%;
  height: auto;
  background: linear-gradient(to right, #11009e, #ff8c00); /* Gradient from blue to orange */
  border: 1px solid #ddd;
  padding: 5px;
  transition: background 0.3s ease; /* Smooth transition effect */
}

.zine img:hover {
  background: linear-gradient(to right, #ff8c00, #11009e); /* Reverse gradient on hover */
}

.purchase-info {
  margin: 20px;
  text-align: center;
  font-size: 20px; /* Adjust the size as needed */
}
</style>
