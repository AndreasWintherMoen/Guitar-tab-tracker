<template>
  <div>
    <v-layout justify-center>
      <v-flex xs4>
        <panel title="Song metadata">
          <input
            type="text"
            name="Title"
            v-model="song.title"
            placeholder="Title"
          />
          <input
            type="text"
            name="Artist"
            v-model="song.artist"
            placeholder="Artist"
          />
          <input
            type="text"
            name="Genre"
            v-model="song.genre"
            placeholder="Genre"
          />
          <input
            type="text"
            name="Album"
            v-model="song.album"
            placeholder="Album"
          />
          <input
            type="text"
            name="albumImageUrl"
            v-model="song.albumImageUrl"
            placeholder="Album Image URL"
          />
          <input
            type="text"
            name="YoutubeId"
            v-model="song.youtubeId"
            placeholder="Youtube ID"
          />
        </panel>
        <button
          class="cyan interactable"
          @click="create">
          Create Song
        </button>
      </v-flex>
      <v-flex xs7>
        <panel title="Song Structure" class="ml-4">
          <v-textarea class="ml-4 mr-5"
            name="tab"
            label="Tab"
            v-model="song.tab"
            auto-grow
          ></v-textarea>
          <v-textarea class="ml-4 mr-5"
            name="lyrics"
            label="Lyrics"
            v-model="song.lyrics"
            auto-grow
          ></v-textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data  () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
input{
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 30px;
  border-radius: 5px;
  /*outline: none;*/
  border: none;
  padding: 10px 40px;
  cursor: pointer;
}

button:hover{
  background-color: #00a0ce;
}
input, button {
  font-size: 1.1em;
}

.error{
  color: red;
}
</style>
