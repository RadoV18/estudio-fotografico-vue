<template>
  <form class="contact-us__form--requirements">
    <text-input inputLabel="Nombre:" inputType="text" />
    <text-input inputLabel="Apellidos:" inputType="text" />
    <text-input inputLabel="Correo Electrónico:" inputType="text" />
    <text-input inputLabel="Fecha del Evento:" inputType="date" />
    <div class="input__container">
      <label class="input__label">Descripción del Evento</label>
      <textarea class="input__textarea"></textarea>
    </div>
    <div class="button__wrapper"><button class="form__button" @click.prevent="">Enviar</button></div>
  </form>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
export default {
  components: {
    TextInput
  }
}
</script>

<style>
.contact-us__form--requirements {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
