import axios from 'axios'
import CookiesStorageService from './CookiesStorageService'
import Configuration from './Api/Configuration'
import {log} from '../utils/helpers'
import {LocalStorageService} from './LocalStorageService'

// LocalstorageService
const StorageService = CookiesStorageService.getService()
let {BASE_URL, BASE_AuthURL} = Configuration


axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common['apiToken'] = ''
axios.defaults.headers.common['Content-Type'] = 'application/json'

/**
 *  Add a request interceptor
 */
axios.interceptors.request.use((config) => {
  LocalStorageService.get('CRLanguage').then((appLanguage) => {
    config.headers['Accept-Language'] = appLanguage
  })
  return config
}, (error) => { log(error) })

/**
 * Add a response interceptor
 */
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return new Promise((resolve, reject) => {
    const originalRequest = error.config

    if (error.response && error.response.status === 401 && originalRequest.url === `${BASE_URL}/auth/refreshToken`) {
      StorageService.clearToken()
      this.props.history.push(BASE_AuthURL)
      return reject(error)
    }

    if (error.response && error.response.status === 401 && error.config && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = StorageService.getRefreshToken()
      if (!!refreshToken) {
        return axios.post(`${BASE_URL}/auth/refreshToken`, {'refreshToken': refreshToken})
          .then(res => {
            if (res.status === 200) {
              StorageService.setToken(res.data)
              originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken
              return axios(originalRequest)
            }
          })
          .then((res) => {
            return resolve(res)
          })
      }
    }
    return reject(error)
  })
})
