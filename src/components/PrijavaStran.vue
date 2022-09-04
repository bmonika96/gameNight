<template>
  <div id="login">

    <div class="login-page">
      <div class="wallpaper-login"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login" v-bind:class="{ error: emptyFields }">
              <h1>Prijava</h1>
              <form class="form-group">
                <input v-model="usernamelogin"  class="form-control" placeholder="Uporabniško ime" required>
                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Geslo" required>
                <input type="submit" class="btn btn-primary" @click="handleLogin">
                <p>Še niste registrirani? <a href="#" @click="registerRedirect">Registracija</a>
                </p>

              </form>
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
  data() {
    return {
      registerActive: false,
      usernamelogin: "",
      passwordLogin: "",
      emptyFields: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (this.loggedIn && this.currentUser) {
      console.log("pushed")
      router.push("/");
    }
  },
  methods: {

    registerRedirect(event) {
        if(event) {
          router.push('/registration')
        }
      },
    handleLogin(e) {
      e.preventDefault()
      if(this.usernamelogin == ""||this.passwordLogin == "") {
        return alert("Izpolnite polje za prijavo");
      }
      console.log("login")
      const user = {
        'username' : this.usernamelogin,
        'password': this.passwordLogin
      }
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
          () => {
           

            console.log("successful")
            router.push({
             name: 'domov'
            })
  
    }).catch((e)=>{
      console.log(e)
      alert("napačni podatki");
    })
    }
}}
</script>
<style>
.login {
  padding:20px;
  opacity:1;
}
h1 {
  color: #2c3e50;
}
</style>