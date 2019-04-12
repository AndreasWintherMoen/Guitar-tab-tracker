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
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          flat
          @click="setAsBookmark">
          <v-icon>outlined_flag</v-icon>
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          flat
          @click="unsetAsBookmark">
          <v-icon>flag</v-icon>
          Unbookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async setAsBookmark () {
      console.log('set as bookmark')
      try {
        const newBookmark = {
          songId: this.song.id,
          userId: this.$store.state.user.id
        }
        this.bookmark = (await BookmarksService.post(newBookmark)).data
        console.log(!!this.bookmark)
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      console.log('unset as bookmark')
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song (value) {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const query = {
          songId: this.song.id,
          userId: this.$store.state.user.id
        }
        console.log('updating bookmark')
        this.bookmark = (await BookmarksService.index(query)).data
      } catch (err) {
        console.log(err)
      }
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
