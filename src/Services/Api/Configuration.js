/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */
import CookiesStorageService from '../CookiesStorageService'
import {EnglishFont} from '../../utils/Fonts'
import arMessages from './../../translations/ar.json'
import {LocalStorageService} from '../LocalStorageService'

const StorageService = CookiesStorageService.getService()

class Configuration {
  static BASE_URL = 'BASE_URL'
  static BASE_AuthURL = '/'
  static General_EndPoints = {
    SortBy: '/SortBy'
  }

  static FACEBOOK_CLIENT_ID = 'FACEBOOK_CLIENT_ID'
  static GOOGLE_CLIENT_ID = 'GOOGLE_CLIENT_ID'

  static Local = LocalStorageService.get('CRLanguage')
  static DefaultLocale = 'en'
  static DefaultDirection = 'ltr'
  static DefaultFont = EnglishFont
  static DefaultMessage = arMessages

  /**
   * Function To Check if the user is Authenticated or not
   * @returns {boolean}
   */
  static isAuth = () => {
    return !!StorageService.getAccessToken()
  }

  static isIOS = () => {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  }
}

export default Configuration
