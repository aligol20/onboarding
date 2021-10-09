import {combineReducers} from 'redux';
import posts from './postsReducer';

const rootReducer = combineReducers({
  //! This reducer will be used to store the version.
  1: (state = {}) => state,
  posts,
});
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
