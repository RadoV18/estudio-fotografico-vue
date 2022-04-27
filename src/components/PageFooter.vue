<template>
  <footer class="footer">
    <div class="footer__content">
      <ul class="footer__pages">
        <li class="footer__link">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="footer__link">
          <router-link to="/gallery">Galería de Fotos</router-link>
        </li>
        <li class="footer__link">
          <router-link to="/requirements">Requerimiento de Clientes</router-link>
        </li>
        <li class="footer__link">
          <router-link to="/contact-us">Contactos</router-link>
        </li>
      </ul>
      <div class="footer__external-links"></div>
    </div>
    <div class="footer__logo">
      <img :src="require(`@/assets/img/header-logo.png`)" alt="Estudio Fotográfico">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style>
  .footer {
    background: #001e26;
    display: flex;
    justify-content: space-around;
  }

  .footer__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .footer__pages a {
    text-decoration: none;
    color: white;
  }

  .footer__pages a:hover {
    text-decoration: underline;
  }

  .footer__logo {
    height: 20%;
  }

  .footer__logo img {
    padding: 1rem 0;
    max-width: 30%;
    max-height: 30%;
    object-fit: contain;
  }
</style>
