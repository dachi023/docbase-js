import Resource from './resource'

class Teams extends Resource {

  /**
   * find teams
   */
  getTeams() {
    return this.axios.get('/teams')
  }

  /**
   * find groups
   */
  getGroups() {
    return this.axios.get(`/teams/${this.domain}/groups`)
  }

  /**
   * find tags
   */
  getTags() {
    return this.axios.get(`/teams/${this.domain}/tags`)
  }

  /**
   * get memos
   */
  getMemos(q = '*', page = 1, perPage = 20) {
    return this.axios.get(`/teams/${this.domain}/posts`, {q, page, perPage})
  }

  /**
   * post new memo
   */
  postMemo(title, body, {draft = false, notice = true, tags = [], scope = 'everyone', groups = []}) {
    return this.axios.post(`/teams/${this.domain}/posts`, {title, body, draft, notice, tags, scope, groups})
  }
}

export default Teams
