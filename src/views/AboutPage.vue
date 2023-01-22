<template>
  <NavBar></NavBar>
  <div class="banner">
    <div class="banner-content">
      <h1>Trouver le maître-nageur qu'il vous faut dans votre piscine préférée</h1>
      <SearchBar />
    </div>
  </div>
  <CardsContainer />
</template>

<script lang="ts">
import CardsContainer from '@/components/CardsContainer.vue'
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: { NavBar, SearchBar, CardsContainer },
  // setup() {
  //   // const count = ref(0)
  //   // function incrementCount() {
  //   //   count.value++
  //   // }
  //   return {
  //     // count,
  //     // incrementCount,
  //   }
  // },
}
</script>

<style>
.banner {
  width: 100%;
  height: 25rem;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/banner.jpeg');
}

.banner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  transform: translate;
}
</style>
