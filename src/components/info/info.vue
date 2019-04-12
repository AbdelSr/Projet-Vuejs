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

.jeu {
  height: 300px;
  width: 40%;
  background-image: url("http://img.over-blog-kiwi.com/0/95/30/84/20141222/ob_5c72b2_lejusteprix-preview.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px;
  padding: 30px;
  box-shadow: 15px 15px 14px #6650506c;
  border-radius: 15px;
}

button {
  width: 130px;
  height: 40px;
  background: linear-gradient(to bottom, #684444 0%, #4b3030 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #463131;
  color: #fbfbfb;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  text-align: left;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  /* Just for presentation */
  margin: 0px;
  margin-bottom: 0px;
}
button:hover {
  box-shadow: 0px 0px 7px 4px rgba(172, 144, 144, 0.685);
}
button:active {
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
  top: 1px;
}

button:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  border-top: 20px solid #745252;
  border-bottom: 20px solid #745252;
  border-left: 16px solid transparent;
  border-right: 20px solid #745252;
  position: absolute;
  opacity: 0.6;
  right: 0;
  top: 0;
  border-radius: 0 5px 5px 0;
}

/* Button pointing left */

button.back {
  text-align: right;
  padding-right: 12px;
  box-sizing: border-box;
}
button.back:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  border-top: 20px solid #c59a9a;
  border-bottom: 20px solid #c59a9a;
  border-right: 16px solid transparent;
  border-left: 20px solid #c59a9a;
  position: absolute;
  opacity: 0.6;
  left: 0;
  top: 0;
  border-radius: 5px 0 0 5px;
}

button.site {
  width: 40px;
  text-align: center;
  text-indent: 0;
}
button.site:after {
  display: none;
}

.prix {
  height: 35px;
  width: 40%;
  background-color: #c59a9a;
  color: aliceblue;
  text-align: center;
  font-size: 15px;
  border: 1px solid #412221;
  border-radius: 5px;
}

.prix:hover {
  background-color: #8a6a6a;
}

.texte {
  color: #fbfbfb;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-shadow: 2px 2px 3px rgb(0, 0, 0);
  font-size: 20px;
  text-align: center;
  text-indent: 5px;
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
    <div v-if="justePrix" class="jeu">
      <label class="texte" for="prix">Entrez un prix entre 1.000 et 10.000 euros :</label>
      <input
        type="number"
        class="prix"
        id="prix"
        name="prix"
        required
        minlength="4"
        maxlength="5"
        size="4"
      >
      <button @click="check">Valider</button>
      <span class="texte" v-if="message">{{message}}</span>
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
  },

  data () {
    return {
      machineSous: false,
      justePrix: false,
      prix: 5000,
      message: undefined
    }
  },

  mounted () {
    if (this.game._id === '1') {
      this.machineSous = true
    }
    if (this.game._id === '2') {
      this.justePrix = true
    }

    const min = Math.ceil(1000)
    const max = Math.floor(10000)
    this.prix = Math.floor(Math.random() * (max - min + 1)) + min
  },

  methods: {
    check () {
      let prixU = document.getElementById('prix').value

      if (prixU > this.prix) {
        this.message = 'Plus petit ! Retentes ta chance Cowboy'
      }
      if (prixU < this.prix) {
        this.message = 'Plus Grand ! Retentes ta chance Cowboy'
      }
      if (+prixU === this.prix) {
        this.message =
          'Bravo grand champion, tu gagnes un bonbon à la menthe !'
      }
    }
  }
}
</script>
