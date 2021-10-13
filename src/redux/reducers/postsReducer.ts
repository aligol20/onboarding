import {createSlice} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    isFetching: false,
    postList: [],
    symbol: '',
    dataFinished:false
  },
  reducers: {

    requestStarted: (state) => {
      state.isFetching = true;
    },
    requestPostsSuccess:(state, action)=>{
      state.isFetching = false;
      state.postList = action.payload;
    },
    requestFinished: (state, action) => {
      state.isFetching = false;
    },
    onDataFinished:(state,action)=>{
      state.dataFinished = action.payload
    }
  },
});

export default postsSlice.reducer;
