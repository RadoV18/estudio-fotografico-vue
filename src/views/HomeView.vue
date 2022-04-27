<template>
  <div class="home">
    <image-background />
    <main-card />
  </div>
</template>

<script>
import MainCard from '@/components/MainCard.vue'
import ImageBackground from '@/components/ImageBackground.vue'
export default {
  name: 'HomeView',
  components: {
    MainCard,
    ImageBackground
  }
}
</script>

<style scoped>

</style>
