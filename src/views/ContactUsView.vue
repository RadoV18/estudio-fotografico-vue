<template>
  <div class="contact-us">
    <h1 class="contact-us__title">Contáctanos</h1>
    <div class="contact-us__content">
      <contact-us-data />
      <div class="contact-us__details">
        <contact-us-form />
        <contact-us-social-media />
      </div>
    </div>
  </div>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm.vue'
import ContactUsData from '@/components/ContactUsData.vue'
import ContactUsSocialMedia from '@/components/ContactUsSocialMedia.vue'
export default {
  components: {
    ContactUsForm,
    ContactUsData,
    ContactUsSocialMedia
  }
}
</script>

<style>
.contact-us {
  display: flex;
  flex-direction: column;
}

.contact-us__title {
  text-align: center;
  margin: 1rem 0;
}

.contact-us__content {
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
}

.contact-us__details {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
