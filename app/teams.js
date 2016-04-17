import ApiClient from './api-client'

class Teams extends ApiClient {

  getTeams() {
    return this.client.get(`/teams`)
  }

  getGroups(domain) {
    return this.client.get(`/teams/${domain}/groups`)
  }

  getTags(domain) {
    return this.client.get(`/teams/${domain}/tags`)
  }

  /**
   * post new memo
   *
   * options: {
   *   draft: default false
   *   notice: default true
   *   tags: default []
   *   scope: default 'everyone'
   *   groups: default [], required when scope is 'groups'
   * }
   */
  postMemo(domain, title, body, options = {}) {
    const data = {
      title,
      body,
      draft: options.draft == null ? false : options.draft,
      notice: options.notice == null ? true : options.notice,
      tags: options.tags || [],
      scope: options.scope || 'everyone',
      groups: options.groups || []
    };
    
    return this.client.post(`/teams/${domain}/posts`, data)
  }
}

export default Teams
