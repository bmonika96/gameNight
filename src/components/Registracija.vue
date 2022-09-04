<template>
  <div id="reg">

    <div class="login-page">
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
  <div class="card login">
    <h1>Registration</h1>
    <form class="form-group">
      <input v-model="userName" class="form-control" placeholder="Uporabniško ime" required>
      <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
      <input v-model="name" type="text" class="form-control" placeholder="Ime" required>
      <input v-model="lastName" type="text" class="form-control" placeholder="Priimek" required>
      <input v-model="passwordReg" type="password" class="form-control" placeholder="Geslo" required>
      <input v-model="confirmReg" type="password" class="form-control" placeholder="Ponovi geslo" required>
    </form>
    <button class="btn btn-primary" @click="handleRegister">Registracija</button>>
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
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (this.loggedIn && this.currentUser) {
      router.push("/");
    }
  },
  methods: {
    handleRegister() {
      const user = {
        'uporabnisko_ime': this.userName,
        'geslo': this.passwordReg,
        'ime':this.name,
        'priimek': this.lastName,
        'email': this.emailReg,
      }
      this.message = "";
      this.successful = false;
      console.log(user);
      this.$store.dispatch("auth/register", user).then(
          (data) => {
            console.log(data);
            if(data == null){
              alert("Uporabniško ime je zasedeno")
              return
            }
            this.successful = true;
            router.push('/login')

          },
          (error) => {
            console.log(error)
            alert("Uporabniško ime je zasedeno")
          }
      );
    },
  },

}
</script>