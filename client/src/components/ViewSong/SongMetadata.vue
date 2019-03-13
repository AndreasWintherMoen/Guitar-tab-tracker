<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn
          dark
          class="cyan"
          @click="navigateTo({
            name: 'song-edit',
            params: {songId: song.id}})">
          Edit
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" v-bind:src="song.albumImageUrl">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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

.song-title{
  font-size: 30px;
}

.song-artist{
  font-size: 24px;
}

.song-genre{
  font-size: 18px;
}

.album-image{
  width: 60%;
  margin: 0 auto;
}
</style>
