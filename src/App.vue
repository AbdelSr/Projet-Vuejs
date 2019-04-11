<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Casino</router-link>|
      <router-link to="/about">About</router-link>
      <div id="imglucas"></div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#imglucas {
  width: 60%;
  height: 200px;
  background-image: url("../image/lucasinho.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 30%;
  box-shadow: 12px 12px 19px rgb(31, 26, 26);
  background-position: top;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  background-image: url("https://www.saint-brevin.com/medias/images/prestataires/casino-hotel-spa-st-brevin-ocean1-2080.jpg");
  background-repeat: no-repeat;
  background-size: 160%;
  border-radius: 30px;
}
#nav {
  padding-top: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.salon {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.game {
  border: rgb(172, 94, 80) 1px solid;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, #412221, #130707);
  box-shadow: 12px 12px 19px rgb(31, 26, 26);
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  margin-left: 70px;
  margin-top: 30px;
  width: 450px;
  height: 300px;
  transform: scale(1);
  transition: 0.3s ease-in-out;
}

.game:hover {
  transform: scale(1.1);
}

.image {
  width: 100%;
  height: 80%;
  border-block-end: rgb(172, 94, 80) 2px solid;
}
.name {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-shadow: 3px 3px 4px rgb(111, 143, 132);
  color: #42b983;
}
.isActive {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: rgb(126, 110, 110);
}

a:link {
  text-decoration: none;
}
</style>
