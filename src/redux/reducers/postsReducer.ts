import {createSlice} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    isFetching: false,
    postList: [],
    symbol: '',
  },
  reducers: {

    requestStarted: (state, action) => {
      state.isFetching = true;
    },
    requestPostsSuccess:(state, action)=>{
      state.postList = action.payload;
    },
    requestFinished: (state, action) => {
      state.isFetching = false;
    },
  },
});

export default postsSlice.reducer;
