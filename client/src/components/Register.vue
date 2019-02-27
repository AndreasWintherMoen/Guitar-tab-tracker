<template>
  <div class="registration-box">
    <h1>Register</h1>
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
      @click="register">
      Register
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
}

h1{
  background: #00b0e0;
  color: white;
  margin-top: -1px;
  width: calc(100% + 2px);
  margin-left: -1px;
  margin-bottom: 30px;
  font-size: 2.5em;
}

input{
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  outline: none;
  margin-top: 10px;
}

input:focus {
  border-bottom-color: #00b0e0;
  color: #00b0e0;

}

button {
  background: #00b0e0;
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px 40px;
}

input, button {
  font-size: 1.2em;
}

.error{
  color: red;
}
</style>
