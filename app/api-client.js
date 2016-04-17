import axios from 'axios'
import constants from './constants'

class ApiClient {

  constructor(token, version = 1, timeout = 1000) {
    this.token = token
    this.version = version
    this.setClient(timeout)
  }

  setClient(timeout) {
    const baseURL = constants.baseURL
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-DocBaseToken': this.token,
      'X-Api-Version': this.version
    }
    this.client = axios.create({baseURL, timeout, headers})
  }
}

export default ApiClient
