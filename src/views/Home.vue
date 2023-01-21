<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of our application.</p>
    <button @click="incrementCount">Count: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    function incrementCount() {
      count.value++
    }
    return {
      count,
      incrementCount
    }
  }
}
</script>
