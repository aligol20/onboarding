import { Dispatch } from 'react';
import { RootStateOrAny } from 'react-redux';
import getPostsRequest from '../../services/apiRequests/getPostRequest';
import snackBar from '../../utils/snackBar';
import { postsSlice } from '../reducers/postsReducer';

const {requestPostsSuccess} = postsSlice.actions;

const fetchPosts = () => async (dispatch:Dispatch<any>, getState:RootStateOrAny) => {

  const fetchPostsResult = await getPostsRequest()
  console.log('im called')

  const {data,status} = fetchPostsResult
  console.log(data,'newPostList')

  if (status===200) {
    dispatch(requestPostsSuccess([ ...data]));
    snackBar({text: 'Refreshed'});
  } else {
    snackBar({text: 'Failed, try again'});
  }
};

export default fetchPosts;


