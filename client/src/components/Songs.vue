<template>
  <panel title="Songs">
    <div v-for="song in songs" v-bind:key="song.title">
      {{song.title}} -
      {{song.artist}} -
      {{song.album}}
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: []
    }
  },
  components: {
    Panel
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = await SongsService.getSongs()
  }
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
