import axios from 'axios';
import { environment } from '../enviroments/enviroment';

const customFetch = axios.create({
  baseURL: environment.apiUrl,
});
export default customFetch;