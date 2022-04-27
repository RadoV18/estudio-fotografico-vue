<template>
  <header class="header">
    <router-link to="/" class="header__title">
      <div class="header__image"><img :src="require(`@/assets/img/header-logo.png`)" alt="Estudio Fotográfico"></div>
      <h1>Estudio Fotográfico</h1>
    </router-link>
    <nav class="header__nav">
      <ul>
        <li class="header__link">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="header__link">
          <router-link to="/gallery">Galería de Fotos</router-link>
        </li>
        <li class="header__link">
          <router-link to="/requirements">Requerimiento de Clientes</router-link>
        </li>
        <li class="header__link">
          <router-link to="/contact-us">Contactos</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.header {
  background: #001e26;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-height: 3rem;
  position: sticky;
  top: 0%;
}

.header__title {
  display: flex;
  text-decoration: none;
}

.header__title h1 {
  padding-left: 2rem;
  color: white;
}

.header__image img {
  max-width: 100%;
  max-height: 100%;
}

.header__nav {
  width: 55%;
}

.header__nav ul {
  display: flex;
  justify-content: space-around;
  height: 100%;
}

.header__link {
  margin: auto 0;
  color: white;
  padding: 0.25rem;
  border-radius: 16px;
}

.header__link a {
  text-decoration: none;
  color: white;
  padding: 0 1rem;
  width: 100%;
}

.header__link:hover {
  background: #3fb984;
  cursor: pointer;
}

.header__link:hover a {
  color: #001e26;
}
</style>
