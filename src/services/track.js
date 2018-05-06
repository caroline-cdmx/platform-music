import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/serach', {
    params: { q, type }
  })
    .then(res => res.data)

}

export default trackService