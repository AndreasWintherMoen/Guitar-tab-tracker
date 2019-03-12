<template>
  <div class="box">
    <h1 class="cyan">{{title}}</h1>
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
</style>
