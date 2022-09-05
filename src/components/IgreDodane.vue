<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">
        <h2>Igre:</h2>
        <button type="button" class="btn btn-sm btn-outline-dark" @click="dodajIgroPage">Dodaj igro</button>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="item in igre" v-bind:key="item.ime_igre" class="col">

            <div class="card card-igra shadow-sm">
                <img class="card-img-top" v-bind:src="item.slika_url" alt="Card image cap">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-light"  @click="openGame(item)">Poglej</button>
                  </div>
                  <small class="text-muted">{{item.uporabnisko_ime}}</small>
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
import ApiKlici from "@/services/apiKlici";

export default {
  name: 'IgrePregled',
  data() {
    return {
      igre: [],
  }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    currentUserData(){
      return this.$store.state.auth.userData;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }

    console.log(this.currentUserData);
    ApiKlici.getIgre(this.currentUserData.username).then(
        (response) => {
        this.igre = JSON.parse(response.data)
          console.log(this.igre)
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
    openGame(igra){
      console.log(igra)
      router.push({
        name: 'igra',
        params: {
          igraId: igra.ID_igre //tukaj je id igre
        }
      })
    },
    dodajIgroPage(e){
      if(e){
        router.push('/igre/dodaj')
      }
    }
  }
}
</script>

<style>
.btn {
  margin: 5px;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.album {
  background: url("https://img.freepik.com/premium-vector/abstract-white-grey-background_528453-7.jpg?w=2000");
  height: 100%;
  width: 100%;
}
body {
  margin:0;
  padding:0;
  background-image:url("https://img.freepik.com/premium-vector/abstract-white-grey-background_528453-7.jpg?w=2000");
  background-size: cover;
  background-repeat:   no-repeat;
  background-position: center center;
}
h2 {
  padding: 10px;
}


</style>