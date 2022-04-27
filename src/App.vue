<template>
  <page-header/>
  <router-view/>
  <page-footer/>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Open Sans";
}
</style>
