import { AxiosError } from 'axios';

function reject(data: AxiosError) {
  return Promise.reject(data);
}

export default reject;
