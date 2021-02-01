/**
 * Rest Client class
 * Responsible for consuming Api endpoints
 *
 * * getRequest
 * * postRequest
 * * putRequest
 * * deleteRequest
 */
import axios from 'axios'
import Configuration from '../Api/Configuration'
import '../axios'
import { log } from '../../utils/helpers'

class RestClient {
  constructor () {
    this.config = new Configuration()
  }

  static getRequest = async (url, config, returnError) => {
    return await axios.get(url, config)
      .then(response => {return response })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          log('getRequest data:', error.response.data)
          log('getRequest status:', error.response.status)
          log('getRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          log('getRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          log('getRequest Error Message:', error.message)
        }
        log('getRequest config:', error.config)
        if (!!returnError) {
          return error
        }
      })
  }

  static postRequest (url, data, config, setFormLoading, setFailure, FormikActions, returnError) {
    return axios.post(url, data, config)
      .then(response => {return response })
      .catch((error) => {
        // eslint-disable-next-line no-unused-expressions
        if (!!FormikActions) {
          try {
            FormikActions.setSubmitting(false)
          } catch (e) {
            FormikActions.isSubmitting = false
          }
        }
        // eslint-disable-next-line no-unused-expressions
        !!setFormLoading ? setFormLoading(false) : ''
        // eslint-disable-next-line no-unused-expressions
        !!setFailure ? setFailure(true) : ''

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          log('postRequest data:', error.response.data)
          log('postRequest status:', error.response.status)
          log('postRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          log('postRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          log('postRequest Error Message:', error.message)
        }
        log('postRequest config:', error.config)
        if (!!returnError) {
          return error
        }
      })
  }

  static putRequest (url, data, config, setFormLoading, setFailure, FormikActions) {
    return axios.put(url, data, config)
      .then(response => {return response })
      .catch((error) => {
        // eslint-disable-next-line no-unused-expressions
        !!FormikActions ? FormikActions.setSubmitting(false) : ''
        // eslint-disable-next-line no-unused-expressions
        !!setFormLoading ? setFormLoading(false) : ''
        // eslint-disable-next-line no-unused-expressions
        !!setFailure ? setFailure(true) : ''
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          log('putRequest data:', error.response.data)
          log('putRequest status:', error.response.status)
          log('putRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          log('putRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          log('putRequest Error Message:', error.message)
        }
        log('putRequest config:', error.config)
      })
  }

  static deleteRequest (url, config, setFormLoading, setFailure, FormikActions) {
    return axios.delete(url, config)
      .then(response => {return response })
      .catch((error) => {
        // eslint-disable-next-line no-unused-expressions
        !!FormikActions ? FormikActions.setSubmitting(false) : ''
        // eslint-disable-next-line no-unused-expressions
        !!setFormLoading ? setFormLoading(false) : ''
        // eslint-disable-next-line no-unused-expressions
        !!setFailure ? setFailure(true) : ''
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          log('deleteRequest data:', error.response.data)
          log('deleteRequest status:', error.response.status)
          log('deleteRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          log('deleteRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          log('deleteRequest Error Message:', error.message)
        }
        log('deleteRequest config:', error.config)
      })
  }
}

export default RestClient
