<style>
.salon {
  width: 100%;
  height: 100%;
  background-position: center;
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
