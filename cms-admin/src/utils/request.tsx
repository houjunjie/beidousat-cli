/* global window */
import axios from 'axios'
// import qs from 'qs'
// import jsonp from 'jsonp'
import * as _ from 'lodash';
import * as pathToRegexp from 'path-to-regexp'
import { message } from 'antd'
import { getLocalStorage } from './utils';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
// import { YQL, CORS } from './config'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
const fetch = (options: any) => {
  let {
    url,
  } = options
  const {
    method = 'get',
    data,
  }= options
  const cloneData = _.cloneDeep(data)
  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      [domin] = url.match(/[a-zA-z]+:\/\/[^/]*/)
      url = url.slice(domin.length)
    }
    const match: any = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    message.error(e.message)
  }
  const SystemAdmin = getLocalStorage('SystemAdmin')
  // // 设置请求头的token
  if (SystemAdmin && SystemAdmin.jwt) {
    axios.defaults.headers.jwt = SystemAdmin.jwt
  } else {
    window.location.href = '/'
  }
  NProgress.start();
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request (options: any) {
  return fetch(options).then((response) => {
    NProgress.done();
    const { statusText, status } = response
    let data = options.fetchType === 'YQL' ? response.data.query.results.json : response.data
    if (data instanceof Array) {
      data = {
        list: data,
      }
    }
    if(data.code !== 0 && status !== 204) {
      message.error(data.tips||data.msg);
      return Promise.resolve({
        success: false,
        message: statusText,
        statusCode: status,
        ...data,
      })
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    })
  }).catch((error) => {
    NProgress.done();
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.tips || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    message.error(msg)
    /* eslint-disable */
    return Promise.reject({ success: false, statusCode, message: msg })
  })
}
