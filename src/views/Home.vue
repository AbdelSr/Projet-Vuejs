<template>
  <div class="home">
    {{result}}
    <Board :list="list"></Board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'
import { getGames } from '@/services/GamesClient.js'
export default {
  name: 'home',
  components: { Board },

  data () {
    return {
      result: 0,
      list: [
        {
          image: 'scr super image',
          name: 'premier jeu',
          isActive: true
        }
      ]
    }
  },

  async mounted () {
    this.result = await getGames()
  }
}
</script>
