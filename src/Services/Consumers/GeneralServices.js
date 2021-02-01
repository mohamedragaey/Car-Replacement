/**
 * General Services class
 */
import RestClient from '../Client/RestClient'
import Configuration from '../Api/Configuration'

const { General_EndPoints } = Configuration

class GeneralServices {

  static SortBy () {
    return RestClient.getRequest(General_EndPoints.SortBy)
  }
}

export default GeneralServices
