<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">
        <h2>Igre:</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="item in igre" v-bind:key="item" class="col">

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
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'IgrePregled',
  data() {
    return {
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
      ]
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
  },
  methods: {
    openGame(igra){
      router.push({
        name: 'igra',
        params: {
          igraId: igra.name
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
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.album {
  background: url("https://img.freepik.com/premium-vector/abstract-white-grey-background_528453-7.jpg?w=2000");
}
h2 {
  padding: 10px;
}


</style>