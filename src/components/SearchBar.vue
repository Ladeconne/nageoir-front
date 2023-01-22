<template>
  <div class="searchbar">
    <div class="search-field">
      <input
        v-model="search"
        type="text"
        placeholder="Maître-nageur, piscine, ..."
        @input="getPropositions"
      />
      <div v-if="showPropositions" class="propositions">
        <ul>
          <li v-for="prop in propositions" :key="prop">{{ prop }}</li>
        </ul>
      </div>
    </div>
    <button @click="submitSearch">Rechercher</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      propositions: [],
      showPropositions: false,
    }
  },
  methods: {
    getPropositions() {
      // Code to handle getting search propositions
    },
    submitSearch() {
      // Code to handle submitting the search
    },
  },
}
</script>

<style>
.searchbar {
  display: flex;
  align-items: center;
  background-color: #262626;
  padding: 1rem;
  color: white;
}

.search-field {
  margin-right: 1rem;
}

.search-field input {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #262626;
  color: white;
  width: 25rem;
}

button {
  background-color: #262626;
  padding: 0.5rem 1rem;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #404040;
}
</style>
