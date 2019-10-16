import { AxiosInstance, AxiosResponse } from 'axios'

/**
 * @typedef {Object} AdminPostParams
 * @prop {number} [author_id]
 * @prop {string} [published_at]
 */
export type AdminPostParams = {
  author_id?: number
  published_at?: string
}

/**
 * @typedef {Object} APIResponse
 */
export type APIResponse<T> = Promise<AxiosResponse<T>>

/**
 * Base class for DocBase resources
 */
export default abstract class Resource {
  /**
   * @abstract
   * @type {string}
   */
  abstract path: string

  /**
   * @type {AxiosInstance}
   */
  client: AxiosInstance

  /**
   * @type {string}
   */
  domain: string

  /**
   * Create DocBase resource
   * @param {AxiosInstance} client
   * @param {string} domain
   */
  constructor(client: AxiosInstance, domain: string) {
    this.client = client
    this.domain = domain
  }
}
