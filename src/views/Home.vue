<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Board :list="list"></Board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  name: 'home',
  components: { Board },
  data () {
    return {
      list: [
        {
          image: 'scr super image',
          name: 'premier jeu',
          isActive: true
        }
      ]
    }
  }
}
</script>
