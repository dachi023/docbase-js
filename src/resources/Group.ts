import Resource, { APIResponse } from './Resource'
import { DocBaseUserShort } from './User'

/**
 * @typedef {Object} DocBaseGroup
 * @prop {number} id
 * @prop {string} name
 * @prop {string} description
 * @prop {number} posts_count
 * @prop {string} last_activity_at
 * @prop {string} created_at
 * @prop {DocBaseUserShort[]} users
 */
export type DocBaseGroup = {
  id: number
  name: string
  description: string
  posts_count: number
  last_activity_at: string
  created_at: string
  users: DocBaseUserShort[]
}

/**
 * @typedef {Object} DocBaseGroupShort
 * @prop {number} id
 * @prop {string} name
 */
export type DocBaseGroupShort = {
  id: number
  name: string
}

/**
 * @typedef {Object} ListParams
 * @prop {string} [name]
 * @prop {number} [page]
 * @prop {number} [per_page]
 */
type ListParams = {
  name?: string
  page?: number
  per_page?: number
}

/**
 * User group resource
 * @extends {Resource}
 */
export default class Group extends Resource {
  /**
   * @inheritdoc
   */
  path = `/teams/${this.domain}/groups`

  /**
   * Get user groups
   * @param {ListParams} [params]
   * @return {Promise} DocBaseGroupShort[]
   */
  list(params: ListParams = {}): APIResponse<DocBaseGroupShort[]> {
    return this.client.get<DocBaseGroupShort[]>(this.path, { params })
  }

  /**
   * Get user group
   * @param {number} id
   * @return {Promise} DocBaseGroup
   */
  get(id: number): APIResponse<DocBaseGroup> {
    return this.client.get<DocBaseGroup>(`${this.path}/${id}`)
  }

  /**
   * Add user group
   * @param {string} name
   * @param {string} [description]
   * @return {Promise} DocBaseGroup
   */
  post(name: string, description?: string): APIResponse<DocBaseGroup> {
    return this.client.post<DocBaseGroup>(this.path, { name, description })
  }

  /**
   * Add users to group
   * @param {number} id
   * @param {number[]} user_ids
   * @return {Promise} void
   */
  joinUsers(id: number, user_ids: number[]): APIResponse<void> {
    return this.client.post<void>(`${this.path}/${id}/users`, { user_ids })
  }

  /**
   * Delete users in group
   * @param {number} id
   * @param {number[]} user_ids
   * @return {Promise} void
   */
  leaveUsers(id: number, user_ids: number[]): APIResponse<void> {
    return this.client.delete<void>(`${this.path}/${id}/users`, { data: { user_ids } })
  }
}
