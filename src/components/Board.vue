<template>
  <div class="salon">
    <ul v-for="item in list" :key="item.id">
      <div class="game">
        <span class="image">Image: {{item.image}}</span>
        <span class="name">Name: {{item.name}}</span>
        <span class="isActive">actif ?:{{item.isActive}}</span>
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
  }
}
</script>
