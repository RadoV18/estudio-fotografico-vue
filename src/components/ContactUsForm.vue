<template>
  <form class="contact-us__form">
    <text-input inputLabel="Nombre:" inputType="text" />
    <text-input inputLabel="Apellidos:" inputType="text" />
    <text-input inputLabel="Correo Electrónico:" inputType="mail" />
    <div class="input__container">
      <label class="input__label">¿Cómo podemos ayudarte?</label>
      <textarea class="input__textarea"></textarea>
    </div>
    <div class="button__wrapper"><button class="form__button" @click.prevent="">Enviar</button></div>
  </form>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
export default {
  name: 'ContactUsForm',
  components: {
    TextInput
  }
}
</script>

<style>
.contact-us__form {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.button__wrapper {
    display: flex;
    justify-content: center;
}

.form__button {
    width: 35%;
    text-align: center;
    background: #3fb984;
    color: #050505;
    border: none;
    height: 2rem;
    font-size: 1rem;
    border-radius: 16px;
}

.form__button:hover {
    background: #30475e;
    cursor: pointer;
    color: white;
}
</style>
