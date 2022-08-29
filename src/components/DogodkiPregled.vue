<template>
  <div id="dogodki">
      <div class="album py-5 bg-light">
        <div class="container">
          <h2>Dogodki:</h2>
          <button type="button" class="btn btn-sm btn-outline-dark" @click="dodajDogodekPage">Dodaj dogodek</button>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="item in dogodki" v-bind:key="item" class="col">
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
        </div>
      </div>
  </div>
</template>

<script>

import router from "@/router";
import APIklici from "../services/apiKlici";
export default {

  name: 'DogodkiPregled',
  data() {
    return {
        dogodki: []

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    currentUserData() {
      return this.$store.state.auth.userData;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }
    APIklici.getDogodki(this.currentUserData.username).then(
        (response) => {
          this.dogodki = JSON.parse(response.data);
          console.log(this.dogodki)
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
  methods: {
    openDogodek(dogodek) {
      console.log(dogodek)
      router.push({
        name: 'dogodek',
        params: {
          dogodekId: dogodek.id_dogodka
        }
      })
    },
    dodajDogodekPage(e){
      if(e){
        router.push('/dogodki/dodaj')
      }
    }
  }
}
</script>

<style>
.btn {
  margin: 5px;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.dogodki {
  background: whitesmoke;
  color: #2c3e50 ;
  padding: 10px !important;
}
h2 {
  padding: 10px;
}


</style>