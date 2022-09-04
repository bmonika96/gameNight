<template>
  <div id="home">
      <section class="header py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h3>Pozdravljeni {{currentUserData.username}}</h3>

            <h1 class="fw-light">GameNight</h1>
            <p class="lead text-muted">Imejte pregled nad vsemi družabnimi igrami in dogodki ter prepustite izbiro igre predlagalniku.</p>
            <p>
              <a href="#" class="btn btn-primary my-2" @click="pojdiIgre">Igre</a>
              <a href="#" class="btn btn-secondary my-2" @click="pojdiDogodki">Dogodki</a> 
              <a href="#" class="btn btn-secondary my-2" @click="pojdiPredlagalnik">Predlagalnik</a>
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <h2>Zadnje dodane igre:</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="item in podatki.igre" v-bind:key="item" class="col">
              <div class="card card-igra shadow-sm">
                <img class="card-img-top" :src=item.slika_url alt="Card image cap">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-light"  @click="openGame(item)">View</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Zadnji dodani dogodki:</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="item in podatki.dogodki" v-bind:key="item" class="col">
              <div class="card card-dogodek shadow-sm">
                <h5>Skupina: {{item.ime_skupine}}</h5>
                <div class="card-body dogodki">
                  <p class="card-text">Datum: {{item.datum}}</p>
                  <p class="card-text">Igra: {{item.odigrana_igra}}</p>
                  <p class="card-text">Zmagovalec: {{item.zmagovalec}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="openDogodek(item)">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">{{item.datum}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <a href="#" class="btn btn-primary my-2" @click="getData">Naloži podatke</a>
        </div>
      </div>


  </div>
</template>

<script>

import router from "@/router";
import APIklici from "@/services/apiKlici"


export default {
  name: 'HomePage',
  data() {
    return {
     podatki: {
       igre: [],
      dogodki: []
        }
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    currentUserData(){
      return this.$store.state.auth.userData ? this.$store.state.auth.userData: "";
    }
  },
  mounted() {
    if (!this.currentUser) {
      router.push('/login');
      console.log("pushed back")
    }


  },
  methods: {
    openGame(igra){
      router.push({
        name: 'igra',
        params: {
           igraId: igra.ID_igre
        }
      })
    },
    openDogodek(dogodek) {
      router.push({
        name: 'dogodek',
        params: {
          dogodekId: dogodek.id_dogodka
        }
      })
    },
    getData(){
          
    APIklici.getDogodki(this.currentUserData.username).then(
          (response) => {
            let dogodki = JSON.parse(response.data);
            if(dogodki.length > 6) {
              dogodki = dogodki.slice(-6)
            }
            this.podatki.dogodki = dogodki
            console.log(this.podatki.dogodki)
          },
          (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
      APIklici.getIgre(this.currentUserData.username).then(
          (response) => {
            let igre = JSON.parse(response.data)
            if(igre.length > 6){
              igre = igre.slice(-6)
            }
            this.podatki.igre = igre
            console.log(this.podatki.igre)
          },
          (error) => {
            this.content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
    pojdiIgre(){
      router.push('/igre')
    },
    pojdiDogodki(){
      router.push('/dogodki')
    },
    pojdiPredlagalnik(){
      router.push('/predlagalnik')
    }
  }
}
</script>

<style>
#home {
  width: 100%;
}
.header {
  background: white;
  margin:0px auto;
  position: static;
}
.btn {
  margin: 5px;
}
.card {
  margin: 5px;
}

h2 {
  padding: 10px;
}


</style>