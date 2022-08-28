<template>
  <div>
    <div>
      <div>
        <img class="igraImage" :src="igraDogodek[6]">
      </div>
      <ul class="list-group list-group-flush dogodekPodatki">
        <li class="list-group-item">Ime Skupine : {{dogodek.ime_skupine}}</li>
        <li class="list-group-item">Datum: {{dogodek.datum}}</li>
        <li class="list-group-item">Odigrana igra: {{dogodek.odigrana_igra}}</li>
        <li class="list-group-item">Zmagovalec: {{dogodek.zmagovalec}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ApiKlici from "@/services/apiKlici";

export default {
  props: {
    dogodekId: String
  },
  name: 'DogodekPodatki',
  data() {
    return {
      dogodek: [],
      igreDogodek:[],
      igraDogodek:[]
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
    ApiKlici.getDogodek(this.currentUserName, this.dogodekId).then(
        (response) => {

          this.dogodek = JSON.parse(response.data)[0];
          console.log(this.dogodek)
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
.dogodekPodatki {
  width: 400px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>