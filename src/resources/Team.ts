import Resource, { APIResponse } from './Resource'

/**
 * @typedef {Object} DocBaseTeam
 * @prop {string} domain
 * @prop {string} name
 */
export type DocBaseTeam = {
  domain: string
  name: string
}

/**
 * Team resource
 * @extends {Resource}
 */
export default class Team extends Resource {
  /**
   * @inheritdoc
   */
  path = '/teams'

  /**
   * Get teams
   * @return {Promise} DocBaseTeam[]
   */
  list(): APIResponse<DocBaseTeam[]> {
    return this.client.get<DocBaseTeam[]>(this.path)
  }
}
