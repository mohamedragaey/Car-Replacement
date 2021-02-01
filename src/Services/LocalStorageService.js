/**
 * LocalStorage Service
 *
 *  To handle {setItem,getItem,removeItem} after validating the value.
 *
 *** NOTICE ***
 * use {localStorage} for web
 * use {AsyncStorage} for mobile
 * **************************************
 */
export class LocalStorageService {
  static data = []
  static set = async (field, value) => {
    LocalStorageService.data[field] = value
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    return localStorage.setItem(field, value)
  }

  static setMultiple = (data) => {
    Object.keys(data).forEach(async (key) => {
      let value = data[key]
      await this.set(key, value)
    })
  }

  static get = async (key) => {
    if (LocalStorageService.data[key] === undefined) {
      LocalStorageService.data[key] = await localStorage.getItem(key)
    }

    return LocalStorageService.data[key]
  }

  static removeItem = async (key) => {
    delete LocalStorageService.data[key]
    return localStorage.removeItem(key)
  }
}
