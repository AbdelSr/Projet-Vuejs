<style>
.salon {
  width: 100%;
  height: 100%;
  background-image: url("https://www.saint-brevin.com/medias/images/prestataires/casino-hotel-spa-st-brevin-ocean1-2080.jpg");
  background-repeat: no-repeat;
  background-size: 200%;
  border-radius: 30px;
  background-position: center;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100% ;
  height: 100%;
}
</style>

<template>
  <div class="salon">
    <ul v-for="item in list" :key="item.id">
      <div class="game">

        <span class="image">
            <img v-bind:src="item.image" />
        </span>
        <span class="name">{{item.name}}</span>
        <span v-if="item.isActive" class="isActive">Disponible !</span>
        <span v-else class="isActive">Indisponible 😢 ...Mais arrive bientôt !!</span>

      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'board',
  components: {},
  props: {
    list: {
      type: Array
    }
  },
  method: {
    isDispo (boolean) {
      if (boolean) {
      }
    },

    getImgUrl () {

    }
  }
}
</script>
