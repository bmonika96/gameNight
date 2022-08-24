<template>
  <div id="igra_dodaj">

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card" v-bind:class="{ error: emptyFields }">
            <h1>Dodaj igro</h1>
            <form class="form-group">
              <input v-model="imeIgre" class="form-control" placeholder="Ime igre" required>
              <input v-model="ocena" class="form-control" placeholder="Ocena" required>
              <input v-model="tezavnost" class="form-control" placeholder="Težavnost" required>
              <input v-model="minStIgr" class="form-control" placeholder="Minimalno število igralcev" required>
              <input v-model="maxStIgr" class="form-control" placeholder="Maximalno število igralcev" required>
              <input v-model="dolzina" class="form-control" placeholder="Dolžina igre" required>
              <input v-model="urlSlike" class="form-control" placeholder="URL slike" required>
              <input type="submit" class="btn btn-primary" @click="DodajIgro">
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

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
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.router.push('/login');
    }
  },
  methods: {




  }
}
</script>