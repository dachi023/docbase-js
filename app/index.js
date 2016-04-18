import Teams from './teams'

export {
  Teams
}

export default class DocBase {

  constructor(token, version = 1, timeout = 1000) {
    this.teams = new Teams(token, version, timeout)
  }
}
