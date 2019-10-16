import clientFactory from './clientFactory'
import Comment from './resources/Comment'
import Group from './resources/Group'
import Post from './resources/Post'
import Tag from './resources/Tag'
import Team from './resources/Team'
import User from './resources/User'

/**
 * @const {string}
 */
const DEFAULT_BASE_URL: string = 'https://api.docbase.io'

/**
 * @const {number}
 */
const DEFAULT_TIMEOUT: number = 3000

/**
 * @const {number}
 */
const DEFAULT_VERSION: number = 2

/**
 * @typedef {Object} Args
 * @prop {string} domain
 * @prop {token} token
 * @prop {string} [baseURL]
 * @prop {timeout} [timeout]
 * @prop {version} [version]
 */
type Args = {
  domain: string
  token: string
  baseURL?: string
  timeout?: number
  version?: number
}

/**
 * @typedef {Object} Resources
 * @prop {Comment} comment
 * @prop {Group} group
 * @prop {Post} post
 * @prop {Tag} tag
 * @prop {Team} team
 * @prop {User} user
 */
type Resources = {
  comment: Comment
  group: Group
  post: Post
  tag: Tag
  team: Team
  user: User
}

/**
 * Create API clients
 * @param {Args} args
 * @return {Resources}
 */
export default function docbase({ baseURL, domain, timeout, token, version }: Args): Resources {
  if (!domain || !token) throw new TypeError('"domain" and "token" is required')

  const client = clientFactory({
    token,
    baseURL: baseURL || DEFAULT_BASE_URL,
    timeout: timeout || DEFAULT_TIMEOUT,
    version: version || DEFAULT_VERSION
  })

  return {
    comment: new Comment(client, domain),
    group: new Group(client, domain),
    post: new Post(client, domain),
    tag: new Tag(client, domain),
    team: new Team(client, domain),
    user: new User(client, domain)
  }
}
