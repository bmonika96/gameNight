<template>
  <div>
  <div>
    <div>
      <img class="igraImage" :src="igra.slika_url">
    </div>
    <ul class="list-group list-group-flush igraPodatki">
      <li class="list-group-item">Ime igre : {{igra.ime_igre}}</li>
      <li class="list-group-item">Ocena: {{igra.ocena}}</li>
      <li class="list-group-item">Težavnost: {{igra.tezavnost}}</li>
      <li class="list-group-item">Minimalno število igralcev: {{igra.min_stevilo_igralcev}}</li>
      <li class="list-group-item">Maksimalno število igralcev:{{igra.max_stevilo_igralcev}}</li>
      <li class="list-group-item">Dolžina igre v minutah:{{igra.dolzina_igre}}</li>

    </ul>
  </div>
  </div>
</template>

<script>
import ApiKlici from "@/services/apiKlici";

export default {
  props: {
    igraId: String
  },
  name: 'IgraPodatki',
  data() {
    return {
      igra: {}
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
    console.log(this.igraId)
    ApiKlici.getIgra(this.igraId).then(
        (response) => {
          console.log(response)
          this.igra = JSON.parse(response.data)[0];
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
  }
}
</script>
<style>
.igraImage {
  max-width: 30%;
  padding: 30px;
}
.igraPodatki {
  width: 400px;
  margin: 0 auto;
}
</style>