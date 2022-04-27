<template>
  <div class="social-media__icon">
    <img :src="require(`@/assets/${src}`)" alt="Logo">
  </div>
</template>

<script>
export default {
  name: 'SocialMediaLogo',
  props: {
    src: String
  }
}
</script>

<style>
.social-media__icon:hover {
    cursor: pointer;
}
</style>
