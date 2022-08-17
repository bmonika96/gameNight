<template>
  <div id="login">

    <div class="login-page">
      <div class="wallpaper-login"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login" v-bind:class="{ error: emptyFields }">
              <h1>Sign In</h1>
              <form class="form-group">
                <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                <input type="submit" class="btn btn-primary" @click="doLogin">
                <p>Don't have an account? <a href="#" @click="registerRedirect">Sign up here</a>
                </p>
                <p><a href="#">Forgot your password?</a></p>
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
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false
    }
  },
  methods: {
      doLogin(event) {
        if(event) {
          if (this.emailLogin === "" || this.passwordLogin === "") {
            this.emptyFields = true;
          } else {
            alert("You are now logged in");
          }
        }
      },

    registerRedirect(event) {
        if(event) {
          router.push('/registration')
        }
      }
    }
}
</script>