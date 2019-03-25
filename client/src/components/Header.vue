<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark class="logo" to="/">
        TabTracker
      </v-btn>
      <v-btn flat dark to="songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="login">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="register">
        Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
        Log out
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.logo:hover:before{
  background-color: transparent;
}
</style>
