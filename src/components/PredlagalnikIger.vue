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
export default {
  name: 'PredlagalnikIgre',
  data() {
    return {
      igre: [
        {
          name: "igra1",
          opis: "neka igra"
        },
        {
          name: "igra2",
          opis: "neka igra 2"
        },
        {
          name: "igra3",
          opis: "neka igra3"
        },
        {
          name: "igra4",
          opis: "neka igra4"
        }
      ],
      igra: {},
      kocka: 0
    }
  },
  computed: {
    returnIgra(){
      if(this.igra.name) {
        return this.igra.name
      }
      return "Tukaj se bo prikazala predlagana igra"
    },
    returnKocka(){
      if(this.kocka > 0){
        return this.kocka
      }
      return "Najprej vrzi kocko"
    },
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
    predlagaj(event) {
      if(event) {
        const rnd = Math.floor(Math.random() * (this.igre.length))
        this.igra = this.igre[rnd];
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
