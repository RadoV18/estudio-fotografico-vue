<template>
  <div class="background">
    <img :src="require(`@/assets/img/homeBackground.jpg`)" alt="Estudio Fotografico" />
  </div>
</template>

<script>
// const selectedCategory = 'a'

// const imgsToDisplay = imgArray.filter((img) => img.categories.includes(selectedCategory))
export default {
  name: 'ImageBackground'
}
</script>

<style>
    .background {
        width: 100%;
    }

    .background img {
        width: 100%;
        max-height: 60vh;
        object-fit: cover;
    }
</style>
