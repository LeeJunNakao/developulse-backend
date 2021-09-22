import axios from 'axios';
import { IHttpClient } from './protocols';

class HttpClient implements IHttpClient {
  async post(url: string, data: any): Promise<any> {
    const response = await axios.post(url, data);
    return response.data;
  }
}

export default HttpClient;
