// @flow
import type { Axios } from 'axios'

import ApiClient from './apiClient'

export default class Resource {
  client: ApiClient
  domain: string

  constructor(client: ApiClient, domain: string) {
    this.client = client
    this.domain = domain
  }

  get request(): Axios {
    return this.client.request
  }
}
