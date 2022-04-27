<template>
  <div>
      <h1 class="image-gallery__title">Galería de Fotos</h1>
      <div class="image-gallery">
          <category-filters :category="this.selectedCategory" @update-category="handleChange" />
          <div class="cards__container">
            <image-card v-for="img in imgsToDisplay" :key="img.id" :id="img.id" :src="img.src" :category="img.category" />
          </div>
      </div>
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'
import CategoryFilters from '@/components/CategoryFilters.vue'
export default {
  name: 'image-gallery',
  components: {
    ImageCard,
    CategoryFilters
  },
  methods: {
    handleChange (newCategory) {
      this.selectedCategory = newCategory
    }
  },
  computed: {
    imgsToDisplay: function () {
      return this.imgArray.filter((img) => this.selectedCategory === 'all' ? true : img.category === this.selectedCategory)
    }
  },
  data () {
    return {
      selectedCategory: 'all',
      imgArray: [
        {
          id: 19,
          src: '/img/cultura/cul5.jpg',
          category: 'cultura'
        },
        {
          id: 8,
          src: '/img/edificios/ed1.jpg',
          category: 'edificios'
        },
        {
          id: 9,
          src: '/img/edificios/ed2.jpg',
          category: 'edificios'
        },
        {
          id: 10,
          src: '/img/edificios/ed3.jpg',
          category: 'edificios'
        },
        {
          id: 11,
          src: '/img/edificios/ed4.jpg',
          category: 'edificios'
        },
        {
          id: 0,
          src: '/img/residencial/res1.jpg',
          category: 'residencial'
        },
        {
          id: 1,
          src: '/img/residencial/res2.jpg',
          category: 'residencial'
        },
        {
          id: 2,
          src: '/img/residencial/res3.jpg',
          category: 'residencial'
        },
        {
          id: 3,
          src: '/img/residencial/res4.jpg',
          category: 'residencial'
        },
        {
          id: 4,
          src: '/img/residencial/res5.jpg',
          category: 'residencial'
        },
        {
          id: 5,
          src: '/img/residencial/res6.jpeg',
          category: 'residencial'
        },
        {
          id: 6,
          src: '/img/residencial/res7.jpg',
          category: 'residencial'
        },
        {
          id: 7,
          src: '/img/residencial/res8.jpg',
          category: 'residencial'
        },
        {
          id: 12,
          src: '/img/edificios/ed5.jpg',
          category: 'edificios'
        },
        {
          id: 13,
          src: '/img/edificios/ed6.jpg',
          category: 'edificios'
        },
        {
          id: 14,
          src: '/img/edificios/ed7.jpg',
          category: 'edificios'
        },
        {
          id: 15,
          src: '/img/cultura/cul1.jpg',
          category: 'cultura'
        },
        {
          id: 16,
          src: '/img/cultura/cul2.jpg',
          category: 'cultura'
        },
        {
          id: 17,
          src: '/img/cultura/cul3.jpg',
          category: 'cultura'
        },
        {
          id: 18,
          src: '/img/cultura/cul4.jpg',
          category: 'cultura'
        },
        {
          id: 20,
          src: '/img/publicidad/pub1.jpg',
          category: 'publicidad'
        },
        {
          id: 21,
          src: '/img/publicidad/pub2.jpg',
          category: 'publicidad'
        },
        {
          id: 22,
          src: '/img/publicidad/pub3.jpeg',
          category: 'publicidad'
        },
        {
          id: 23,
          src: '/img/publicidad/pub4.jpg',
          category: 'publicidad'
        },
        {
          id: 24,
          src: '/img/publicidad/pub5.jpg',
          category: 'publicidad'
        }
      ]
    }
  }
}
</script>

<style>
.image-gallery__title {
    text-align: center;
    margin: 1rem 0;
}

.image-gallery {
    display: flex;
    width: 100%;
}

.cards__container {
    margin: 1rem auto;
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 30px;
}
</style>
