// @flow
import Resource from '../core/resource'

export default class Team extends Resource {
  basePath: string = '/teams'

  teams() {
    return this.request.get(this.basePath)
  }

  groups() {
    return this.request.get(`${this.basePath}/${this.domain}/groups`)
  }

  tags() {
    return this.request.get(`${this.basePath}/${this.domain}/tags`)
  }
}
