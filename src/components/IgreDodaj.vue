<template>
  <div id="igra_dodaj">

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card">
              <h1>Dodaj igro</h1>
              <div class="form-group">
                <input v-model="imeIgre" class="form-control" placeholder="Ime igre" required>
                <input v-model="ocena" class="form-control" placeholder="Ocena" required>
                <input v-model="tezavnost" class="form-control" placeholder="Težavnost" required>
                <input v-model="minStIgr" class="form-control" placeholder="Minimalno število igralcev" required>
                <input v-model="maxStIgr" class="form-control" placeholder="Maximalno število igralcev" required>
                <input v-model="dolzina" class="form-control" placeholder="Dolžina igre" required>
                <input v-model="urlSlike" class="form-control" placeholder="URL slike" required>
              </div>
              <button class="btn btn-primary" @click="dodajIgro">DODAJ</button>
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
      imeIgre: "",
      ocena: "",
      tezavnost: "",
      maxStIgr: "",
      minStIgr: "",
      dolzina: "",
      urlSlike: ""
    }
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
    dodajIgro(e){
      if(e) {
        console.log("dodajanje")
        const data = {
          "ime_igre": this.imeIgre,
          "min_stevilo_igralcev": this.minStIgr,
          "max_stevilo_igralcev": this.maxStIgr,
          "tezavnost": this.tezavnost,
          "dolzina_igre": this.dolzina,
          "ocena": this.ocena,
          "slika_url": this.urlSlike
        }
        ApiKlici.postIgra(this.currentUserName, data).then(
            (response) => {
              alert(response.data.message)
              router.push('/igre')

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