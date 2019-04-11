<template>
  <div class="home">
    <Board :list="result"></Board>
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
      result: 0
    }
  },

  async mounted () {
    this.result = await getGames()
  }
}
</script>
