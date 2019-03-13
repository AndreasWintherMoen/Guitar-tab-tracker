<template>
  <div class="box">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action">
      </slot>
    </v-toolbar>
    <div class="content">
      <slot>
        No slot content defined.
      </slot>
    </div>

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
  height: 100%;
  margin: 0 auto;
}

.content{
  padding: 15px;
}
</style>
