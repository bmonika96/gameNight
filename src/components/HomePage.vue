<template>
  <div id="home">
      <section class="header py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h3>Pozdravljeni {{currentUserData.username}}</h3>

            <h1 class="fw-light">GameNight</h1>
            <p class="lead text-muted">Imejte pregled nad vsemi družabnimi igrami in dogodki ter prepustite izbiro igre predlagalniku.</p>
            <p>
              <a href="#" class="btn btn-primary my-2">Igre</a>
              <a href="#" class="btn btn-secondary my-2">Dogodki</a>
              <a href="#" class="btn btn-secondary my-2">Predlagalnik</a>
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
                <img class="card-img-top" :src=item.background alt="Card image cap">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-light"  @click="openGame(item)">View</button>
                      <button type="button" class="btn btn-sm btn-outline-light">Edit</button>
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
                <h2>{{item.name}}</h2>
                <div class="card-body">
                  <p class="card-text">{{item.opis}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" @click="openDogodek(item)">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
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

export default {
  name: 'HomePage',
  data() {
    return {
     podatki: {
       igre: [
         {
           name: "Wingspan",
           opis: "neka igra",
           background: "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg"
         },
         {
           name: "Terraforming Mars",
           opis: "neka igra 2",
           background: "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg"
         },
         {
           name: "Everdell",
           opis: "neka igra3",
           background: "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__imagepage/img/ijYTk6KGtxLRdIvLsGar13ZHs4c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3918905.png"
         },
         {
           name: "Catan",
           opis: "neka igra4",
           background: "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__imagepage/img/M_3Vg1j2HlNgkv7PL2xl2BJE2bw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2419375.jpg"
         },
         {
           name: "Wonderlands War",
           opis: "neka igra",
           background: "https://cf.geekdo-images.com/bUbrvlY6Dw1cdb-sNrnkew__imagepage/img/y7_f2G_NwkQpT5VqNmjsg_cPZdc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5188761.jpg"
         },
         {
           name: "Scythe",
           opis: "neka igra 2",
           background: "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepage/img/zoz-t_z9nqqxL7OwQenbqp9PRl8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3163924.jpg"
         }
       ],
        dogodki: [
          {
            name: "dogodek1",
            opis: "nek dogodek"
          },
          {
            name: "dogodek2",
            opis: "nek dogodek 2"
          },
          {
            name: "dogodek3",
            opis: "nek dogodek3"
          },
          {
            name: "dogodek4",
            opis: "nek dogodek4"
          }
        ]
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
    }


  },
  methods: {
    openGame(igraId){
      router.push({
        name: 'igra',
        params: {
          igraId: igraId
        }
      })
    },
    openDogodek(dogodek) {
      router.push({
        name: 'dogodek',
        params: {
          dogodekId: dogodek.name
        }
      })
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