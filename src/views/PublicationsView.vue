<!-- PublicationsView.vue -->
<template>
    <div class="publications">
        <h1>All Publications</h1>

        <div class="publications-list">
            <div v-for="publication in publications" :key="publication.id" class="publication-item" @click="handleClick(publication)">
                <div class="title">{{ publication.title }}</div>
                <div class="author">{{ publication.author }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const publications = ref([
    { id: 1, title: "I'M BEGGING MY PARENTS FOR AD*ERALL", author: 'MYLES ZAVELO', bodyText: `Like I said, I'm begging my parents for Adderall. Like I haven't said, I'm down on my knees. When I beg, I get down on my knees. Is it bad that I'm old fashioned? Is it bad that I want help? At first, they stare silently into each other's eyes for four minutes. At first they say, no, never. Because Mom and Dad are old hippies who really don't believe in psychotropic medications. But then I flunk all my classes and my chemistry teacher starts calling them and they say yes! And I don't want to talk about what happens next...And here's what happens next...And next...I burst into fresh tears and my chemistry teacher says, "What's the matter? You can't take it?" I hate him. I run out of the building like it's burning down. I hate him. And my pants are on fire. Gosh, the weather is so harsh and I'm wearing a tee shirt and my puffer is hanging in my locker. He calls my name. I turn around. I am done. Third degree burns over ninety percent of my body. "What's the matter with you? Why are you such a freak? Why won't you let me school you?" My chemistry teacher is having some questions. My chemistry teacher is such a wild animal. I tell him, "There's a stray cat under my bed. My parents want to f*ck me. School is too hard." I tell him, "I'm lacking emotional skin. You don't even know me. I'm worried about skin cancer." I tell him, "I didn't sign up for this. My blood is hot, hot, hot. These pills are making me crazy." He charges at me. It's a big hug. It's a tough world. He must know that I'll never change for him?` },
    { id: 2, title: "BEES", author: 'SAM PINK', bodyText: "A couple of years ago, I lived in a different apartment, part of the same building as the one I am in now. My roommate was someone I did not know and almost never saw. He was from India. The landlord set us up when I emailed her about needing another person to split the rent. Our rooms were right across from each other. Sometimes I would open my door in the middle of the night to use the bathroom, and he would be standing by his door, looking out its slight crack. Other than that, I lived a year with him, and our only exchanges were brief smiles in the kitchen while we drank water. I saw the inside of his room once. He was gone, and he had left his door open. I didn't go into his room, but I did look. There was just a sleeping bag on the floor and garbage all over. The garbage made a steep pile in the corner of his room. It looked exactly the same as my room. Three days before the end of our lease, he walked up to me in the living room. I was reading. He told me he had just finished his PhD and that he wanted to buy me pizza to celebrate. He kept saying, 'Ahm—do you like beesa hot? Beesa hot?'' I knew he was saying Pizza Hut, but it also sounded like he was saying, 'Bees are hot.'' I was worried that he'd turn around with a back covered in flaming bees and then point to them saying, 'Bees are hot,'' in his tiny voice. Flaming bees would've been nice to look at, I bet. Maybe too scary though. I said, 'Yes, I like Pizza Hut.'' He ordered pizza, and we ate it, sitting very still on the couch. We only looked at each other once, to nod and smile. We didn't say anything. I moved out the next day, into an apartment on a different floor in the same building."}
    // Add more publications as needed
]);

const sortOption = ref('title');

const sortPublications = () => {
    const sorted = [...publications.value];
    sorted.sort((a, b) => {
        if (sortOption.value === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortOption.value === 'author') {
            return a.author.localeCompare(b.author);
        }
        return 0;
    });
    publications.value = sorted;
};


const handleClick = (publication) => {
    // Display the body text in the alert
    alert(`Clicked: Title - ${publication.title}, Author - ${publication.author}\n\n${publication.bodyText}`);
};
</script>

<style scoped>
.publications {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto; /* Make the container scrollable */
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
}

.publications-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.publication-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.author {
  font-size: 14px;
  color: #666;
}

  .alert {
  width: 400px; /* Adjust the width as needed */

}

.filter {
  margin-bottom: 20px;
}

select {
  margin-left: 10px;
}
</style>

