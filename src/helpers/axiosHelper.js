import 'dotenv/config';
import axios from 'axios';
import * as urlHelper from './urlHelper';

const { NODE_ENV } = process.env;
const { reactUrl, defaultUrl } = urlHelper.backend;

export default (data = {}) => {
   const { token, URL } = data;
   const baseURL =
      URL ||
      (reactUrl && `${reactUrl}/mlimaplatform`) ||
      (defaultUrl && `${defaultUrl}/mlimaplatform`);
   const headers = {
      'access-token': token || localStorage.token || undefined,
   };

   return (
      (NODE_ENV === 'test' && axios) ||
      axios.create({
         baseURL,
         headers,
      })
   );
};
