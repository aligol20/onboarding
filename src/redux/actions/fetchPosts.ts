import { Dispatch } from 'react';
import { RootStateOrAny } from 'react-redux';
import getPostsRequest from '../../services/apiRequests/getPostRequest';
import snackBar from '../../utils/snackBar';
import { postsSlice } from '../reducers/postsReducer';
import {isArray} from 'lodash'

const {requestPostsSuccess,requestStarted,onDataFinished} = postsSlice.actions;

const fetchPosts = (page:number) => async (dispatch:Dispatch<any>, getState:RootStateOrAny) => {
  dispatch(requestStarted())
  const fetchPostsResult = await getPostsRequest(page)
  console.log('im called')

  const {data,status} = fetchPostsResult
  console.log(data,'newPostList')

  if (status===200) {
    if(data && isArray(data) ){
      dispatch(onDataFinished(true))
    }
    dispatch(requestPostsSuccess([ ...data]));
  } else {
    snackBar({text: 'Failed, try again'});
  }
};

export default fetchPosts;


