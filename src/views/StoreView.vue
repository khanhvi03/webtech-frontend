<template>
    <div class="store">
      <div class="purchase-info-container">
        <h1 class="main-heading">
          If you want to purchase our Zine, please PayPal 12 euro to <span style="color: #ff0000;">objecta@google.com</span> with your address in the description and the # of the Zine you want to purchase. Shipping is included in the price. We only ship Europewide.
        </h1>
      </div>
  
      <!-- Zine #1 -->
      <div class="zine">
        <img src="/Users/dariae/Desktop/HTW/webtech/objecta2.jpeg" alt="Object A #1, 2023">
        <h2>Object A #1, 2023</h2>
        <p>Editors' selection of works submitted in 2023.</p>
      </div>
  
      <!-- Zine #2 -->
      <div class="zine">
        <img src="/Users/dariae/Desktop/HTW/webtech/objecta3.jpeg" alt="Object A #2, 2024">
        <h2>Object A #2, 2024</h2>
        <p>Editors' selection of works submitted in 2024.</p>
      </div>
  
      <!-- Purchase information -->
      <div class="purchase-info">
        <h2 class="info-text"> Each Zine is printed in Berlin and has about 50-80 pages of selected works submitted to Object A throughout the year. </h2>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Spray+Paint&display=swap');
  
  .store {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .purchase-info-container {
    background-color: #001a57; /* Yves Klein Blue */
    padding: 20px;
    margin: 20px;
    margin-top: -20px;
    text-align: center;
  }
  
  .main-heading,
  .info-text {
    font-family: 'Rubik Spray Paint', sans-serif;
    color: white;
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
  