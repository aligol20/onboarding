import axios from 'axios';
import PropTypes from 'prop-types';
import {BASE_URL} from '../consts/baseUrl';

export const axiosGet = async ({api, data = null}:{api:string,data?:any}) => {
  const options = {
    data: data,
    url: BASE_URL + api,
  };

  return axios(options);
};

