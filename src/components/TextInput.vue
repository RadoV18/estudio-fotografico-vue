<template>
  <div class="input__container">
    <label class="input__label">{{inputLabel}}</label>
    <input class="input__input" :type="type" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    inputLabel: String,
    inputType: String
  }
}
</script>

<style>
.input__container {
  display: flex;
  flex-direction: column;
  margin: 0 8rem;
}

.input__textarea {
  resize: vertical;
  min-height: 2rem;
  border: 2px solid rgba(48, 71, 94, 0.5);
  border-radius: 3px;
}

.input__input {
  height: 1.5rem;
  border: 2px solid rgba(48, 71, 94, 0.5);
  border-radius: 3px;
}
</style>
