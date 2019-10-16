import Resource, { AdminPostParams, APIResponse } from './Resource'
import { DocBaseComment } from './Comment'
import { DocBaseGroupShort } from './Group'
import { DocBaseTag } from './Tag'
import { DocBaseUserShort } from './User'

/**
 * @typedef {string} DocBasePostScope
 */
export type DocBasePostScope = 'everyone' | 'group' | 'private'

/**
 * @typedef {Object} DocBasePost
 * @prop {number} id
 * @prop {string} title
 * @prop {string} body
 * @prop {boolean} draft
 * @prop {boolean} archived
 * @prop {string} url
 * @prop {string} created_at
 * @prop {DocBasePostScope} scope
 * @prop {string} sharing_url
 * @prop {DocBaseTag[]} tags
 * @prop {DocBaseUserShort} user
 * @prop {number} stars_count
 * @prop {number} good_jobs_count
 * @prop {DocBaseComment[]} comments
 * @prop {DocBaseGroupShort[]} groups
 */
export type DocBasePost = {
  id: number
  title: string
  body: string
  draft: boolean
  archived: boolean
  url: string
  created_at: string
  scope: DocBasePostScope
  sharing_url: string
  tags: DocBaseTag[]
  user: DocBaseUserShort
  stars_count: number
  good_jobs_count: number
  comments: DocBaseComment[]
  groups: DocBaseGroupShort[]
}

/**
 * @typedef {Object} ListParams
 * @prop {number} [page]
 * @prop {number} [per_page]
 * @prop {string} [q]
 */
type ListParams = {
  page?: number
  per_page?: number
  q?: string
}

/**
 * @typedef {Object} SearchResult
 * @prop {DocBasePost[]} posts
 * @prop {Object} meta
 * @prop {?number} meta.previous_page
 * @prop {?string} meta.next_page
 * @prop {number} mta.total
 */
type SearchResult = {
  posts: DocBasePost[]
  meta: {
    previous_page: number | null
    next_page: string | null
    total: number
  }
}

/**
 * @typedef {Object} PostParams
 * @prop {boolean} [draft]
 * @prop {number[]} [groups]
 * @prop {boolean} [notice]
 * @prop {DocBasePostScope} [scope]
 * @prop {string[]} [tags]
 */
type PostParams = {
  draft?: boolean
  groups?: number[]
  notice?: boolean
  scope?: DocBasePostScope
  tags?: string[]
}

/**
 * @typedef {Object} PatchParams
 * @prop {string} [body]
 * @prop {boolean} [draft]
 * @prop {number[]} [groups]
 * @prop {boolean} [notice]
 * @prop {DocBasePostScope} [scope]
 * @prop {string[]} [tags]
 * @prop {string} [title]
 */
type PatchParams = {
  body?: string
  draft?: boolean
  groups?: number[]
  notice?: boolean
  scope?: DocBasePostScope
  tags?: string[]
  title?: string
}

/**
 * Post resource
 * @extends {Resource}
 */
export default class Post extends Resource {
  /**
   * @inheritdoc
   */
  path = `/teams/${this.domain}/posts`

  /**
   * Get posts
   * @param {ListParams} [params]
   * @return {Promise} SearchResult
   */
  list(params: ListParams = {}): APIResponse<SearchResult> {
    return this.client.get<SearchResult>(this.path, { params })
  }

  /**
   * Get post
   * @param {number} id
   * @return {Promise} DocBasePost
   */
  get(id: number): APIResponse<DocBasePost> {
    return this.client.get<DocBasePost>(`${this.path}/${id}`)
  }

  /**
   * Add post
   * @param {string} title
   * @param {string} body
   * @param {PostParams} [params]
   * @param {AdminPostParams} [adminParams]
   * @return {Promise} DocBasePost
   */
  post(title: string, body: string, params?: PostParams, adminParams?: AdminPostParams): APIResponse<DocBasePost> {
    return this.client.post<DocBasePost>(this.path, { title, body, ...params, ...adminParams })
  }

  /**
   * Edit post
   * @param id
   * @param {PatchParams} [params]
   * @return {Promise} DocBasePost
   */
  patch<DocBasePost>(id: number, params?: PatchParams): APIResponse<DocBasePost> {
    return this.client.patch<DocBasePost>(`${this.path}/${id}`, params)
  }

  /**
   * Delete post
   * @param {number} id
   * @return {Promise} void
   */
  delete(id: number): APIResponse<void> {
    return this.client.delete<void>(`${this.path}/${id}`)
  }

  /**
   * Archive post
   * @param {id} id
   * @return {Promise} void
   */
  archive(id: number): APIResponse<void> {
    return this.client.put<void>(`${this.path}/${id}/archive`)
  }

  /**
   * Unarchive post
   * @param {number} id
   * @return {Promise} void
   */
  unarchive(id: number): APIResponse<void> {
    return this.client.put<void>(`${this.path}/${id}/unarchive`)
  }
}
