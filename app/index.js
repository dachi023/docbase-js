import constants from './constants'
import Teams from './teams'

export {
  Teams
}

export default class DocBase {

  constructor(token, version = constants.version, timeout = constants.timeout) {
    this.teams = new Teams(token, version, timeout)
  }
}
