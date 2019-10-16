import Resource, { APIResponse } from './Resource'

/**
 * @typedef {Object} DocBaseTag
 * @prop {string} name
 */
export type DocBaseTag = {
  name: string
}

/**
 * Tag resource
 * @extends {Resource}
 */
export default class Tag extends Resource {
  /**
   * @inheritdoc
   */
  path = `/teams/${this.domain}/tags`

  /**
   * Get tags
   * @return {Promise} DocBaseTag[]
   */
  list(): APIResponse<DocBaseTag[]> {
    return this.client.get<DocBaseTag[]>(this.path)
  }
}
