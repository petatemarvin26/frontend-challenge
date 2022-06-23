import { AxiosResponse } from 'axios';

function resolve({ data, config }: AxiosResponse) {
  return data;
}

export default resolve;
