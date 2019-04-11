<template>
  <div class="salon">
    <ul v-for="item in list" :key="item.id">
      <div class="game">
        <span class="image">{{item.image}}</span>
        <span class="name">Nom: {{item.name}}</span>
        <span class="isActive">DISPONIBLE{{item.isActive}}</span>
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
    }
  }
}
</script>
