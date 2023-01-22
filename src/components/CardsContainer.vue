<template>
  <div class="card-container">
    <div v-for="card in cards" :key="card.id" class="card">
      <!-- <img :src="card.image" :alt="card.title" /> -->
      <h3>{{ card.title }}</h3>
      <p>{{ card.text }}</p>
      <router-link :to="{ name: 'about' }" class="card-button">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Card 1',
          text: 'This is the first card.',
          // image: '@/assets/card1.jpg',
        },
        {
          id: 2,
          title: 'Card 2',
          text: 'This is the second card.',
          // image: '@/assets/card2.jpg',
        },
        {
          id: 3,
          title: 'Card 3',
          text: 'This is the third card.',
          // image: '@/assets/card3.jpg',
        },
      ],
    }
  },
}
</script>

<style>
.card-container {
  display: flex;
  padding: 3rem;
}
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 4rem;
}
</style>
