import axios from 'axios';
import { fetchComments } from '../actions/commentsActions';

export function submitURL(data) {
  return (dispatch) => {
    return axios.post('/api/videos', data)
    .then((response) => {
      dispatch({ type: 'SUBMIT_VIDEO_FULFILLED', payload: response.data });
      return response.data;
    })
    .catch((err) => {
      dispatch({ type: 'SUBMIT_VIDEO_FAILED', payload: err });
    });
  };
}
