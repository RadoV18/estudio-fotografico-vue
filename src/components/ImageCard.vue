<template>
  <div class="card">
    <img :src="require(`@/assets${this.src}`)" alt="">
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    src: String,
    category: String,
    id: Number
  }
}
</script>

<style>
.card {
    height: 500px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card img {
    margin: 0 auto;
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
}
</style>
