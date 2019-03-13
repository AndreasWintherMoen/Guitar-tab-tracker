<template>
  <div>
    <v-layout>
      <v-flex xs6 class="ml-3 mt-4 mb-2">
        <song-metadata v-bind:song="song"></song-metadata>
      </v-flex>
      <v-flex xs6 class="ml-2 mr-3 mt-4 mb-2">
        <you-tube v-bind:youtubeId="song.youtubeId">
        </you-tube>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="ml-3">
        <tab v-bind:song="song"></tab>
      </v-flex>
      <v-flex xs6 class="ml-2 mr-3">
        <lyrics v-bind:song="song"></lyrics>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

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
