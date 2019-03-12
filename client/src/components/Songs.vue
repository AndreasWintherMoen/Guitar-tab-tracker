<template>
  <v-layout justify-center>
      <v-flex xs6>
        <panel title="Songs">
          <v-btn
            slot="action"
            to="songs/create"
            class="cyan accent-3"
            light
            small
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>
          <div v-for="song in songs" v-bind:key="song.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
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
    this.songs = (await SongsService.getSongs()).data
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
