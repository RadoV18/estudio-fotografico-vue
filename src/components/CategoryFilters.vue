<template>
  <div class="category__container">
    <div class="filters">
      <div class="filters__button">
        <h3>Filtros</h3>
      </div>
      <div class="filters__content">
        <ul>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category == 'all' }"
            @click="this.$emit('update-category','all')"
          >
            <span>Todas las Fotografías</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category == 'residencial' }"
            @click="this.$emit('update-category','residencial')"
          >
            <span>Residencial</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category == 'edificios' }"
            @click="this.$emit('update-category','edificios')"
          >
            <span>Edificios</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category == 'publicidad' }"
            @click="this.$emit('update-category','publicidad')"
          >
            <span>Publicidad</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category == 'cultura' }"
            @click="this.$emit('update-category','cultura')"
          >
            <span>Cultura</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryFilters',
  props: {
    category: String
  }
}
</script>

<style>
.category__container {
  width: 20%;
}

.filters__button {
  text-align: center;
  padding: 2rem 0;
}

.filters__element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
}

.filters__element span {
  line-height: 4rem;
  vertical-align: middle;
  text-align: center;
}

.filters__element--active {
  background: #3fb984;
  color: #001e26;
}

.filters__element:hover {
  background: #30475e;
  color: white;
  cursor: pointer;
}

.filters__element--active:hover {
  background: #3fb984;
  color: #001e26;
}
</style>
