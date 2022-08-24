<template>
  <div>
    <div>
      <ul class="list-group list-group-flush">

        <li class="list-group-item">{{dogodekId}}</li>
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
    dogodekId: String
  },
  name: 'DogodekPodatki',
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
  },
}
</script>