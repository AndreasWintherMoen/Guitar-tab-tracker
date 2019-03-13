<template>
  <div>
    <v-layout justify-center>
      <v-flex xs4>
        <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
      </v-flex>
      <v-flex xs7>
        <panel title="Song Structure" class="ml-4">
          <v-textarea class="ml-4 mr-5"
            label="Tab"
            required
            no-resize
            :rules="[required]"
            v-model="song.tab"
          ></v-textarea>
          <v-textarea class="ml-4 mr-5"
            label="Lyrics"
            required
            no-resize
            :rules="[required]"
            v-model="song.lyrics"
          ></v-textarea>
          <div class="error" v-if="error"> {{error}}</div>
          <button
          class="cyan interactable"
          @click="save">
          Save Song
        </button>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
      await SongsService.show(this.song)
    } catch (err) {
      console.log(err)
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
