<template>
  <footer>
    <div class="footer-section">
      <div class="footer-column">
        <h4>A propos de Nageoir</h4>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </div>
      <div class="footer-column">
        <h4>Recherches fréquentes</h4>
        <router-link :to="{ name: 'instructors' }">Maître-nageur</router-link>
        <router-link :to="{ name: 'pools' }">Piscine</router-link>
      </div>
    </div>
    <div class="footer-section">
      <a href="https://github.com/Nageoir" target="_blank">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://instagram.com/Nageoir" target="_blank">
        <i class="fa fa-instagram"></i>
      </a>
      <a href="https://linkedin.com/in/Nageoir" target="_blank">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
    <div class="footer-section">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
        pellentesque urna varius vitae.
      </p>
      <router-link :to="{ name: 'terms' }">Terms</router-link>
      <router-link :to="{ name: 'privacy' }">Privacy</router-link>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #f5f5f5;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin-right: 1rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-section a {
  color: #4183c4;
  text-decoration: none;
  margin-right: 0.5rem;
}

.footer-section a:hover {
  text-decoration: underline;
}
</style>
