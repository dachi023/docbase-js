// @flow
import ApiClient from './core/apiClient'
import constants from './constants'

import Memo from './resources/memo'
import Team from './resources/team'

export {
  Memo,
  Team
}

type options = {
  baseUrl: string,
  timeout: number,
  version: number
}

const defaultOptions: options = {
  baseUrl: constants.baseUrl,
  timeout: constants.timeout,
  version: constants.version
}

export default class DocBase {
  memo: Memo
  team: Team

  constructor(domain: string, token: string, options: options) {
    const params = Object.assign({}, defaultOptions, options)
    const client = new ApiClient(params.baseUrl, params.timeout, token, params.version)

    this.memo = new Memo(client, domain)
    this.team = new Team(client, domain)
  }
}
