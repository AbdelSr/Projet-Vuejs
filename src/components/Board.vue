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
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="salon">
    <ul v-for="game in list" :key="game._id">
      <router-link :to="{ name: 'info', params: { game } }">
        <div class="game">
          <span class="image">
            <img v-bind:src="game.image">
          </span>
          <span class="name">{{game.name}}</span>
          <span v-if="game.isActive" class="isActive">Disponible !</span>
          <span v-else class="isActive">Indisponible 😢 ...Mais arrive bientôt !!</span>
        </div>
      </router-link>|
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
  }
}
</script>
