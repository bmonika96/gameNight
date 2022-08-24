<template>
  <div>
  <div>
    <ul class="list-group">

      <li class="list-group-item">{{igraId}}</li>
      <li class="list-group-item">podatki</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    igraId: String
  },
  name: 'IgraPodatki',
  data() {
    return {

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
  }
}
</script>