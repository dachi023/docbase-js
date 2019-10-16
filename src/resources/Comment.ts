import Resource, { AdminPostParams, APIResponse } from './Resource'
import { DocBaseUserShort } from './User'

/**
 * @typedef {Object} DocBaseComment
 * @prop {number} id
 * @prop {string} body
 * @prop {string} created_at
 * @prop {DocBaseUserShort} user
 */
export type DocBaseComment = {
  id: number
  body: string
  created_at: string
  user: DocBaseUserShort
}

/**
 * @typedef {Object} PostParams
 * @prop {boolean} [notice]
 */
type PostParams = {
  notice?: boolean
}

/**
 * Comment resource
 * @extends {Resource}
 */
export default class Comment extends Resource {
  /**
   * @inheritdoc
   */
  path = `/teams/${this.domain}`

  /**
   * Post comment
   * @param {number} id
   * @param {string} body
   * @param {PostParams} [params]
   * @param {AdminPostParams} [adminParams]
   * @return {Promise} DocBaseComment
   */
  post(id: number, body: string, params?: PostParams, adminParams?: AdminPostParams): APIResponse<DocBaseComment> {
    return this.client.post<DocBaseComment>(`${this.path}/posts/${id}/comments`, { body, ...params, ...adminParams })
  }

  /**
   * Delete comment
   * @param {number} id
   * @return {Promise} void
   */
  delete(id: number): APIResponse<void> {
    return this.client.delete<void>(`${this.path}/${id}`)
  }
}
