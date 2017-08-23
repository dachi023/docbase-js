// @flow
import Resource from '../core/resource'

export type memo = {
  title?: string,
  body?: string,
  draft?: boolean,
  notice?: boolean,
  tags?: Array<string>,
  scope?: 'everyone' | 'group' | 'private',
  groups?: Array<number>
}

export default class Memo extends Resource {
  basePath: string = `/teams/${this.domain}/posts`

  delete(id: number | string) {
    return this.request.delete(`${this.basePath}/${id}`)
  }

  get(id: number | string) {
    return this.request.get(`${this.basePath}/${id}`)
  }

  patch(id: number | string, { title, body, draft = false, notice = true, tags, scope, groups }: memo = {}) {
    return this.request.patch(`${this.basePath}/posts/${id}`, { title, body, draft, notice, tags, scope, groups })
  }

  post({ title, body, draft = false, notice = true, tags = [], scope = 'everyone', groups = [] }: memo) {
    return this.request.post(this.basePath, { title, body, draft, notice, tags, scope, groups })
  }

  search(q: string = '*', page: number = 1, perPage: number = 20) {
    return this.request.get(`${this.basePath}?q=${encodeURIComponent(q)}&page=${page}&per_page=${perPage}`)
  }
}
