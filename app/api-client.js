import axios from 'axios'

class ApiClient {

  constructor({token, baseUrl, timeout, version}) {
    this.token = token
    this.baseUrl = baseUrl
    this.timeout = timeout
    this.version = version

    this.setAxios()
  }

  setAxios() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-DocBaseToken': this.token,
        'X-Api-Version': this.version
      },
      timeout: this.timeout
    })
  }
}

export default ApiClient
