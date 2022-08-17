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
      <input v-model="userId" type="email" class="form-control" placeholder="Uporabniško ime" required>
      <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
      <input v-model="passwordReg" type="password" class="form-control" placeholder="Geslo" required>
      <input v-model="confirmReg" type="password" class="form-control" placeholder="Ponovi geslo" required>
      <input type="submit" class="btn btn-primary" @click="doRegister">
    </form>
  </div>
  </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      userId: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false
    }
  },
  computed: {
    validation() {
      return this.form.userId.length > 4 && this.form.userId.length < 13
    }
  },
  methods: {

    doRegister(event) {
      if(event) {
        event.preventDefault()
        alert('registracija uspešna')

      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.emailLogin = ''
      this.passwordLogin = ''
      this.userId = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>