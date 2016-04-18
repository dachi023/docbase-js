import ApiClient from './api-client'

class Resource {

  constructor({domain, token, baseUrl, timeout, version}) {
    this.domain = domain
    this.client = new ApiClient({token, baseUrl, timeout, version})
  }

  get axios() {
    return this.client.axios
  }
}

export default Resource
