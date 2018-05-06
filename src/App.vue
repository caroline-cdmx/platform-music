<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text", 
            placeholder="Buscar canciones",
            v-model="searchQuery"
          ) 
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p 
          small {{ searchMessage }}
      .container
        .columns
          .column(v-for="t in tracks") 
            | {{ t.name }} - {{ t.artists[0].name }}


    
</template>

<script>
import trackService from './services/track.js'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
      /* msg: 'Hola Vue!',
      showValue: false,
      value: 'Algo'
      items: [1, 2, 3, 4, 5, 6]
      person: {
      name: 'Juan'
      } */
    }
  },
  methods: {
    search () {
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
        })
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
