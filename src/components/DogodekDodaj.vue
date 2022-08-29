<template>
  <div id="igra_dodaj">

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card">
            <h1>Dodaj igro</h1>
            <form class="form-group">
              <input v-model="form.ime_skupine" class="form-control" placeholder="Ime skupine" required>
              <input v-model="form.datum" class="form-control" placeholder="Datum" required>
              <input v-model="form.odigrana_igra" class="form-control" placeholder="Odigrana igra" required>
              <input v-model="form.zmagovalec" class="form-control" placeholder="Zmagovalec" required>
            </form>
            <button class="btn btn-primary" @click="dodajDogodek">DODAJ</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import ApiKlici from "@/services/apiKlici";
import router from "@/router";

export default {
  name: 'DodajIgro',
  data() {
    return {
      form: {
      ime_skupine: "",
      datum: "",
      odigrana_igra: "",
      zmagovalec: "",
    }}
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    currentUserName() {
      return this.$store.state.auth.userData.username;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }
  },
  methods: {
    dodajDogodek(e){
      if(e) {
        console.log("dodajanje")
        ApiKlici.postDogodek(this.currentUserName, this.form).then(
            (response) => {
              if(response.status == 200) {
                alert("Dogodek dodan")
              router.push('/dogodki')
              }
              alert("Nekaj ni bilo v redu")


            },
            (error) => {
              console.log("error")
              this.content =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        );
      }
    }
  }
}
</script>