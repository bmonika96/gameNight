<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#" @click="routePushDomov">GameNight</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="routePushIgre">Igre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="routePushDogodki">Dogodki</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="routePushPredlagalnik">Predlagalnik igre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="routePushReg">Registracija</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="routePushLogin">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="odjava">Odjava</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>

import router from "@/router";

export default {
  data() {
    return {}
  },
  methods: {
    routePushLogin(event){
      if(event) {
        router.push('/login');
      }
    },
    routePushReg(event){
      if(event) {
        router.push('/registration');
      }
    },
    routePushIgre(event){
      if(event) {
        router.push('/igre');
      }
    },
    routePushDomov(event){
      if(event) {
        router.push('/');
      }
    },
    routePushDogodki(event){
      if(event) {
        router.push('/dogodki');
      }
    },
    routePushPredlagalnik(event){
      if(event) {
        router.push('/predlagalnik');
      }
    },
    odjava(e){
      if(e) {
        this.$store.dispatch('auth/logout');
        router.push('/login');
      }
    }
  }
}
</script>