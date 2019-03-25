<template>
  <div>
    <panel title="Search">
      <v-text-field
        label="Search for song title, artist, album or genre"
        v-model="search"
        ></v-text-field>
    </panel>
  </div>
</template>

<script>
import _ from 'lodash'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
