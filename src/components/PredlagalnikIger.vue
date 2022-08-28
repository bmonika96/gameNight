<template>
  <div class="predlagalnik" >
      <div class="card card-predlagalnik">

        <div class="card-body">
          <h5 class="card-title"> Predlagalnik Igre</h5>
          <p class="card-text">Klikni na gumb za predlog igre</p>
          <a href="#" class="btn btn-light" @click="predlagaj">Predlagaj</a>
        </div>
        <h2>{{returnIgra}}</h2>

<hr>

      <div class="card-body">
        <h5 class="card-title"> Kockomet</h5>
        <p class="card-text">Klikni na gumb za met kocke</p>
        <a href="#" class="btn btn-light" @click="vrziKocko">Vrzi Kocko</a>
      </div>
      <h2>{{returnKocka}}</h2>
    </div>
    </div>
</template>

<script>
import ApiKlici from "@/services/apiKlici";

export default {
  name: 'PredlagalnikIgre',
  data() {
    return {
      igre: [
      ],
      igra: {},
      kocka: 0
    }
  },
  computed: {
    returnIgra(){
      if(this.igra.ime_igre) {
        return this.igra.ime_igre
      }
      return "Tukaj se bo prikazala predlagana igra"
    },
    returnKocka(){
      if(this.kocka > 0){
        return this.kocka
      }
      return "Najprej vrzi kocko"
    },
    currentUserData() {
      return this.$store.state.auth.userData;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },

  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }
    ApiKlici.getIgre(this.currentUserData.username).then(
        (response) => {
          this.igre = JSON.parse(response.data);
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
    predlagaj(event) {
      if(event) {
        console.log(this.igre)
        const rnd = Math.floor(Math.random() * (this.igre.length))
        this.igra = this.igre[rnd];
        console.log(this.igra)
      }
    },
    vrziKocko(event) {
      if(event) {
        this.kocka = Math.floor((Math.random() * 6) + 1)
      }
    }
  }


}
</script>

<style>


</style>
