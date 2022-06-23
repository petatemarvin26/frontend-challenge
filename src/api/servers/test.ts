import axios from 'axios';
import { TEST_API_URL } from 'constants/env';

const testServer = axios.create({
  baseURL: TEST_API_URL
});

export default testServer;
