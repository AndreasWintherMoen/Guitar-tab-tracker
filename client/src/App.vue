<template>
  <div id="app">
    <page-header />
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cyan {
  background-color: #00b0c0;
  color: #fff;
}

.box{
  border: 1px solid #000;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 25px;
  margin-top: 100px;
}
</style>
