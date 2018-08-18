import Frisbee from 'frisbee';
import querystring from 'querystring';

import Config from '../config/Config';

const api = new Frisbee({
  baseURI: Config.url,
  headers: {
    Accept: 'application/json',
    'Conent-Type': 'application/json',
    'Accept-Charset': 'utf-8',
    Method: 'GET'
  }
});

let Http = {
  get: (path, params) => {
    return Http.request({ method: 'get', path, params });
  },
  post: (path, params) => {
    params.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    return Http.request({ method: 'post', path, params });
  },
  put: (path, params) => {
    return Http.request({ method: 'put', path, params });
  },
  request: ({ method, path, params }) => {
    if (method == 'post' && typeof params.body == 'object') {
      params.body = querystring.stringify(params.body);
    }

    return new Promise((resolve, reject) => {
      try {
        return api[method](path, params).then(res => {
          if (res.err) {
            return reject(res.originalResponse);
          }
          return resolve(res.body);
        });
      } catch (error) {
        return reject(error);
      }
    });
  }
};

module.exports = Http;
