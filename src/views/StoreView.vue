<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <Navbar/>
    <div class="purchase-info-container container-fluid">
      <h6 class="main-heading text-muted">
        If you want to purchase our Zine, please PayPal 12€ to
        <span style="color: white">penhub@gmail.com</span>
        with your address in the description and the # of the Zine you want to purchase. Shipping
        is included in the price. We only ship in Europe.
      </h6>
    </div>
  </header>
  <main>
    <div class="container-fluid mt-5">
      <div class="store">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <!-- Zine #1 -->
          <div class="col zine">
            <img src="" width="200" height="250">
            <h4>Object A #1, 2023</h4>
            <p>Editors' selection of works submitted in 2023.</p>
          </div>

          <!-- Zine #2 -->
          <div class="col zine">
            <img src="" width="200" height="250">
            <h4>Object A #2, 2024</h4>
            <p>Editors' selection of works submitted in 2024.</p>
          </div>

        </div>
        <!-- Purchase information -->
        <div class="purchase-info">
          <h2 class="info-text">
            Each Zine is printed in Berlin and has about 50-80 pages of selected works submitted to
            Penhub throughout the year.
          </h2>
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

.purchase-info-container {
  background-color: lightcoral;
  text-align: center;
}

.zine {
  margin: 20px;
  text-align: center;
}

.zine img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  padding: 5px;
}

.purchase-info {
  margin: 20px;
  text-align: center;
}
</style>
