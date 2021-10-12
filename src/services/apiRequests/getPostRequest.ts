import { COMMON_FEEDS_API, POSTS_API } from '../../consts/api';
import { BASE_URL } from '../../consts/baseUrl';
import { axiosGet } from '../axios';

const getPostsRequest = () => {
  return axiosGet({
    api: `${COMMON_FEEDS_API}`,
  });
};
export default getPostsRequest;

