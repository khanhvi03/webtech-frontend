<template>
  <header>
    <Navbar />
  </header>

  <main class="mt-3">
      <div class="p-3 text-center text-muted bg-body ">
        <p class="display-6 col-9 mx-auto" style="font-size: 30px">
          Welcome to <span class="brand">Wordwave</span> -
          an independent online and print publishing house headquartered in Berlin!</p>
        <div class="col-8 mx-auto pt-4 " id = "about">
          <h4 class="text-start pb-1 mb-2 border-bottom" style="color: #11009e">WHO WE ARE</h4>
          <p class="text-start">
            <strong>A Global Hub for Writers and Readers:</strong>
            Wordwave serves as a global hub where writers of all backgrounds and experiences can come together to share their stories, ideas, and perspectives.
            We believe that every voice deserves to be heard, and our platform is open to all users who wish to contribute their unique creations to the world of literature.
          </p>
          <p class="text-start">
            <strong>Submit Your Work:</strong>
            One of the core features of Wordwave is our open submission policy. All users, regardless of their prior writing experience, are invited to submit their literary works.
            Whether it's poetry, short stories, essays, or other forms of creative writing, we encourage diversity and creativity.
          </p>
          <h4 class="text-start pb-1 mb-2 border-bottom pt-2" style="color: #11009e">WHAT WE DO</h4>
          <p class="text-start">
            <strong>Editorial Review Process:</strong>
            Upon submission, our dedicated team of editors carefully reviews each piece to ensure quality and adherence to our editorial standards.
            This process helps maintain a high standard of literary excellence while respecting the individuality of each author's voice.
          </p>
          <p class="text-start">
            <strong>Featured on the Home Page:</strong>
            Selected works that captivate our editors' attention will be prominently featured on our main "home" page.
            This showcases the talent and diversity of our contributors, providing a dynamic and ever-changing collection for our readers to explore.
          </p>
          <p class="text-start">
            <strong>Printed Half-Yearly Zines:</strong>
            The best of the best, curated by our discerning editors, find a home in our half-yearly Zines.
            These carefully crafted collections bring together a selection of outstanding works in a tangible, printed format.
            Each Zine is a testament to the rich tapestry of voices that make up the Wordwave community.
          </p>
          <p class="text-start">
            <strong>Zine Purchases:</strong>
            Readers and enthusiasts can support their favorite authors and the Wordwave community by purchasing our half-yearly Zines.
            Immerse yourself in a physical compilation of exceptional literary works that span genres and perspectives.
          </p>
          <h4 class="text-start pb-1 mb-2 border-bottom pt-2" style="color: #11009e">JOIN US</h4>
          <p class="text-start">
            Whether you're a budding writer or a passionate reader, Wordwave welcomes you to be part of our global community.
            Submit your work, explore diverse voices, and celebrate the beauty of storytelling together!
          </p>
        </div>
      </div>
  </main>


</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
</script>

<style scoped>
.brand{
  color: #11009e;
  font-weight: bold;
  font-family: "Poppins Light 300", sans-serif;
}
</style>
