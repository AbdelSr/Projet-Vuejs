<template>
  <div class="home">{{result}}</div>
</template>

<script>
// @ is an alias to /src
import { getGames } from '@/services/GamesClient.js'

export default {
  name: 'home',
  components: {},
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
