<template>
  <div class="social-media">
    <h2>Encuéntranos en Redes Sociales:</h2>
    <div class="social-media__content">
      <social-media-logo src="logo/facebook.png" />
      <social-media-logo src="logo/instagram.png" />
      <social-media-logo src="logo/youtube.png" />
      <social-media-logo src="logo/whatsapp.png" />
    </div>
  </div>
</template>

<script>
import SocialMediaLogo from '@/components/SocialMediaLogo.vue'
export default {
  name: 'ContactUsSocialMedia',
  components: {
    SocialMediaLogo
  }
}
</script>

<style>
.social-media h2 {
    text-align: center;
}

.social-media__content {
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 0 auto;
}
</style>
