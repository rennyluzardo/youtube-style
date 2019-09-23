import { SET_VIDEO_DETAIL } from '../actions/videos'

const initialState = {
  videos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_VIDEO_DETAIL:
    return { ...state, videos: action.payload }
  default:
    return state;
  }
}
