import Api from './Api'

export default {
  getSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
