// @flow
import axios from 'axios'
import type { Axios } from 'axios'

export default class ApiClient {
  baseUrl: string
  timeout: number
  token: string
  version: number
  _request: Axios


  constructor(baseUrl: string, timeout: number, token: string, version: number) {
    this.baseUrl = baseUrl
    this.timeout = timeout
    this.token = token
    this.version = version
  }

  get request(): Axios {
    if (!this._request) {
      this._request = axios.create({
        baseURL: this.baseUrl,
        headers: this.headers,
        timeout: this.timeout
      })
    }
    return this._request
  }

  get headers(): { [string]: number | string } {
    return {
      'Content-Type': 'application/json; charset=utf-8',
      'X-DocBaseToken': this.token,
      'X-Api-Version': this.version
    }
  }
}
