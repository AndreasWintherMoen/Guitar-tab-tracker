<template>
  <div>
    <panel title="YouTube Video">
      <youtube
        v-bind:video-id="youtubeId"
        ></youtube>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style scoped>
</style>
