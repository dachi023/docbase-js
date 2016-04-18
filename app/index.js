import Teams from './teams'
import constants from './constants'

export {
  Teams
}

class DocBase {

  constructor({domain, token, baseUrl = constants.baseUrl, timeout = constants.timeout, version = constants.version}) {
    this.teams = new Teams({domain, token, baseUrl, timeout, version})
  }
}

export default DocBase
