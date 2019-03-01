<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark class="logo" to="/">
        TabTracker
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
.logo:hover:before{
  background-color: transparent;
}
</style>
