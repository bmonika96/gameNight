<template>
  <div id="dogodki">
      <div class="album py-5 bg-light">
        <div class="container">
          <h2>Dogodki:</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="item in dogodki" v-bind:key="item" class="col">
              <div class="card card-dogodek shadow-sm">
                <h2>{{item["ime_skupine"]}}</h2>
                <div class="card-body">
                  <p class="card-text">{{item["datum"]}}</p>
                  <p class="card-text">{{item["odigrana_igra"]}}</p>
                  <p class="card-text">{{item["zmagovalec"]}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="openDogodek(item)">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">{{item["datum"]}}</small>
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
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }
    APIklici.getDogodki("admin_monika").then(
        (response) => {
          this.dogodki = response.data;
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
      router.push({
        name: 'dogodek',
        params: {
          dogodekId: dogodek["id_dogodka"]
        }
      })
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
h2 {
  padding: 10px;
}


</style>