<template>
  <div class="registration-box">
    <h1 class="cyan">Login</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password" />
    <br>
    <div class="error" v-html="error" />
    <button
      class="cyan interactable"
      @click="login">
      Login
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.registration-box{
  border: 1px solid #000;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 25px;
  margin-top: 100px;
}

h1{
  margin-top: -1px;
  width: calc(100% + 2px);
  margin-left: -1px;
  margin-bottom: 30px;
  font-size: 2em;
  padding-top: 10px;
  padding-bottom: 10px;
}

input{
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 30px;
  border-radius: 5px;
  /*outline: none;*/
  border: none;
  padding: 10px 40px;
  cursor: pointer;
}

button:hover{
  background-color: #00a0ce;
}
input, button {
  font-size: 1.1em;
}

.error{
  color: red;
}

</style>
