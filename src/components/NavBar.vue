<template>
  <nav>
    <div class="left-links">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
      <router-link to="/" class="home-link">Accueil</router-link>
    </div>
    <div class="right-links">
      <router-link id="login-instructor" to="/login/intructor"
        >Vous êtes maître nageur?</router-link
      >
      <router-link v-if="isConnected" to="/rendezvous">Mes rendez-vous</router-link>
      <button v-if="!isConnected" @click="login">Se connecter</button>
      <div v-else class="dropdown">
        <button @click="showDropdown = !showDropdown">
          {{ currentUser }}
        </button>
        <ul v-if="showDropdown">
          <li @click="logout">Se déconnecter</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
      currentUser: '',
      showDropdown: false,
    }
  },
  methods: {
    login() {
      // Code to handle user login
      this.isConnected = true
      this.currentUser = 'Yves'
    },
    logout() {
      // Code to handle user logout
      this.isConnected = false
    },
  },
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  padding: 1rem;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 40px;
  margin-right: 1rem;
}

.home-link {
  margin-left: 1rem;
  text-decoration: none;
  color: white;
}
.left-links {
  display: flex;
  align-items: center;
}

.right-links {
  display: flex;
  align-items: center;
}

.right-links a,
.right-links button {
  margin-left: 1rem;
  text-decoration: none;
  color: white;
  background-color: #262626;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

#login-instructor {
  background-color: #404040;
}
.right-links a:hover,
.right-links button:hover {
  background-color: #404040;
}

.dropdown {
  position: relative;
}

.dropdown ul {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #262626;
  padding: 0.5rem;
}

.dropdown ul li {
  cursor: pointer;
  color: white;
  margin-bottom: 0.5rem;
}
</style>
