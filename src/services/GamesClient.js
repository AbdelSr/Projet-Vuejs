import axios from 'axios'

export async function getGames () {
  const { data } = await axios.get('http://localhost:3000/games')

  return data
}
