<style>
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.titre {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 25%;
  height: 120px;
  background-image: linear-gradient(to bottom right, #412221, #130707);
  border-radius: 20%;
  border: rgb(172, 94, 80) 1px solid;
  box-shadow: 12px 12px 19px rgb(31, 26, 26);
  color: rgb(194, 175, 175);
  font-family: "Bree Serif", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-shadow: 5px 5px 8px rgb(167, 162, 161);
  filter: grayscale(0) blur(0px);
  transition: all 0.5s ease;
}

.titre:hover {
  border-radius: 30%; /* on arrondit l'image */
  transform: rotate(360deg);
}

.description {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  height: 80px;
  background-image: linear-gradient(to bottom right, #412221, #130707);
  border-radius: 20%;
  border: rgb(172, 94, 80) 1px solid;
  box-shadow: 12px 12px 19px rgb(31, 26, 26);
  color: rgb(194, 175, 175);
  font-family: "Bree Serif", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: 0.3s ease-in-out;
}

.description:hover {
  transform: scale(1.1);
}
</style>

<template>
  <div class="info">
    <div class="titre">
      <span>{{game.name}}</span>
    </div>
    <div class="description">
      <span>{{game.about}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  components: {},
  props: {
    game: {
      type: Object
    }
  }
}
</script>
