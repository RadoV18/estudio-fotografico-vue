<template>
  <div>
    <h1 class="contact-us__title">Requerimiento de Clientes</h1>
    <div class="contact-us__content">
      <div class="contact-us__details">
        <requirements-form />
      </div>
      <div class="requirements">
        <img :src="require('@/assets/img/requirements.jpg')" alt="Requerimientos" width="690">
      </div>
    </div>
  </div>
</template>

<script>
import RequirementsForm from '@/components/RequirementsForm.vue'
export default {
  components: {
    RequirementsForm
  }
}
</script>

<style>
.requirements {
  object-fit: cover;
}
</style>
