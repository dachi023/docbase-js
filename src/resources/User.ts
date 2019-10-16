import Resource, { APIResponse } from './Resource'
import { DocBaseGroupShort } from './Group'

/**
 * @typedef {string} DocBaseUserRole
 */
export type DocBaseUserRole = 'administrator' | 'owner' | 'user'

/**
 * @typedef {Object} DocBaseUser
 * @prop {number} id
 * @prop {string} name
 * @prop {string} username
 * @prop {string} profile_image_url
 * @prop {DocBaseUserRole} role
 * @prop {number} posts_count
 * @prop {string} last_access_time
 * @prop {string} two_step_authentication
 * @prop {DocBaseGroupShort[]} groups
 */
export type DocBaseUser = {
  id: number
  name: string
  username: string
  profile_image_url: string
  role: DocBaseUserRole
  posts_count: number
  last_access_time: string
  two_step_authentication: boolean
  groups: DocBaseGroupShort[]
}

/**
 * @typedef {Object} DocBaseUserShort
 * @prop {number} id
 * @prop {string} name
 * @prop {string} profile_image_url
 */
export type DocBaseUserShort = {
  id: number
  name: string
  profile_image_url: string
}

/**
 * @typedef {Object} ListParams
 * @prop {boolean} [include_user_groups]
 * @prop {number} [page]
 * @prop {number} [per_page]
 * @prop {string} [q]
 */
type ListParams = {
  include_user_groups?: boolean
  page?: number
  per_page?: number
  q?: string
}

/**
 * User resource
 * @extends {Resource}
 */
export default class User extends Resource {
  /**
   * @inheritdoc
   */
  path = `/teams/${this.domain}/users`

  /**
   * Get users
   * @param {ListParams} [params]
   * @return {Promise} DocBaseUser[]
   */
  list(params: ListParams = {}): APIResponse<DocBaseUser[]> {
    return this.client.get<DocBaseUser[]>(this.path, { params })
  }
}
