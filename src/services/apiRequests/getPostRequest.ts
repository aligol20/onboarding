import { COMMON_FEEDS_API, POSTS_API } from '../../consts/api';
import { BASE_URL } from '../../consts/baseUrl';
import { axiosGet } from '../axios';

const getPostsRequest = (fromItem:number,toItem:number) => {
  return axiosGet({
    api: `${COMMON_FEEDS_API}${fromItem}/${toItem}`,
  });
};
export default getPostsRequest;

