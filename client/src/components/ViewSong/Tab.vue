<template>
  <div>
    <panel title="Tab">
      <v-textarea class="textbox"
        readonly
        no-resize
        auto-grow
        v-model="song.tab"
      ></v-textarea>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.textbox{
  width: 95%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
