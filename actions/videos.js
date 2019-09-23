import youtube from '../config/youtube'
import CONSTANTS from '../config/constants'

export const SET_VIDEO_DETAIL = 'GET_VIDEO_DETAIL'

export const getVideoDetail = term => dispatch => (
  youtube.get('/search', {
    params: {
      q: term,
      part: 'snippet',
      maxResults: 5,
      key: CONSTANTS.KEY
    }
  })
    .then(res => {
      dispatch({ type: SET_VIDEO_DETAIL, payload: res })
    })
)
