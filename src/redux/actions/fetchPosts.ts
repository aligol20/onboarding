import { Dispatch } from 'react';
import { RootStateOrAny } from 'react-redux';
import { PAGINATION_STEP } from '../../consts/api';
import getPostsRequest from '../../services/apiRequests/getPostRequest';
import { PostType } from '../../types/ServiceTypes';
import snackBar from '../../utils/snackBar';
import { postsSlice } from '../reducers/postsReducer';

const {requestPostsSuccess, requestStarted, onDataFinished} =
  postsSlice.actions;

const fetchPosts =
  (fromItem: number, toItem: number) =>
  async (dispatch: Dispatch<any>, getState: RootStateOrAny) => {
    try {
      const {postList} = getState().posts;
      dispatch(requestStarted());
      const fetchPostsResult = await getPostsRequest(fromItem, toItem);

      const {status} = fetchPostsResult;
      const data: PostType[] = fetchPostsResult.data;

      if (status === 200 && data && data.length < PAGINATION_STEP) {
        dispatch(onDataFinished(true));
      }
      if (fromItem === 0) {
        dispatch(requestPostsSuccess(data));
      } else {
        dispatch(requestPostsSuccess([...postList, ...data]));
      }
    } catch (err) {
      console.log(err, 'err');
      snackBar({text: 'Failed, try again'});
    }
  };

export default fetchPosts;
