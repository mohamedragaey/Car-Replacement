// CookiesStorageService.js
import Cookies from 'js-cookie'

const CookiesStorageService = (function () {
  let _service

  function _getService () {
    if (!_service) {
      _service = this
      return _service
    }
    return _service
  }

  function _setToken (tokenObj) {
    Cookies.set('access_token', tokenObj.accessToken)
    Cookies.set('refresh_token', tokenObj.refreshToken)
  }

  function _setDisplayName (DisplayName) {
    Cookies.set('user_name', DisplayName)
  }

  function _getDisplayName () {
    return Cookies.get('user_name')
  }

  function _getAccessToken () {
    return Cookies.get('access_token')
  }

  function _getRefreshToken () {
    return Cookies.get('refresh_token')
  }

  function _clearToken () {
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    Cookies.remove('user_name')
  }

  return {
    getService: _getService,
    setToken: _setToken,
    setDisplayName: _setDisplayName,
    getDisplayName: _getDisplayName,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken
  }
})()

export default CookiesStorageService
