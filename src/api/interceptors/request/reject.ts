import {  AxiosError } from 'axios';

function reject(error: AxiosError) {
  return Promise.reject(error);
}

export default reject;
