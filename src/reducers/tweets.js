import { RECEIVE_TWEETS } from '../actions/tweets';

export default function tweets (state = {}, action) {
  const {
    tweets
  } = action;

  switch(action.type) {
  case RECEIVE_TWEETS:
    return {
      ...state,
      tweets,
    };
  default:
    return state;
  }
};
