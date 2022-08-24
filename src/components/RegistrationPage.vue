<template>
  <div id="reg">

    <div class="login-page">
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
  <div class="card login" v-bind:class="{ error: emptyFields }">
    <h1>Registration</h1>
    <form class="form-group">
      <input v-model="userName" class="form-control" placeholder="Uporabniško ime" required>
      <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
      <input v-model="name" type="text" class="form-control" placeholder="Ime" required>
      <input v-model="lastName" type="text" class="form-control" placeholder="Priimek" required>
      <input v-model="passwordReg" type="password" class="form-control" placeholder="Geslo" required>
      <input v-model="confirmReg" type="password" class="form-control" placeholder="Ponovi geslo" required>
      <input type="submit" class="btn btn-primary" @click="handleRegister">
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
  name: 'RegistrationPage',
  data() {
    return {
      userName: "",
      emailReg: "",
      name:"",
      lastName: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      router.push("/");
    }
  },
  methods: {
    handleRegister(e) {
      e.preventDefault();
      const user = {
        'uporabnisko_ime': this.userName,
        'email': this.email,
        'geslo': this.passwordReg,
        'ime':this.name,
        'priimek': this.lastName
      }
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
            router.push('/')
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },

}
</script>