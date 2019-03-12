<template>
  <div class="box">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action">
      </slot>
    </v-toolbar>
    <slot>
      No slot content defined.
    </slot>

  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
h1{
  margin-top: -1px;
  width: calc(100% + 2px);
  margin-left: -1px;
  margin-bottom: 30px;
  font-size: 2em;
  padding-top: 10px;
  padding-bottom: 10px;
}

.box{
  border: 1px solid #000;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 25px;
  margin-top: 100px;
}
</style>
