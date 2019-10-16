import docbase from './index'
import Comment from './resources/Comment'
import Group from './resources/Group'
import Post from './resources/Post'
import Tag from './resources/Tag'
import Team from './resources/Team'
import User from './resources/User'

const resources = docbase({
  domain: 'domain',
  token: 'DocBaseAccessToken'
})

describe('docbase', () => {
  test('are all properties available', () => {
    expect(resources.comment).toBeInstanceOf(Comment)
    expect(resources.group).toBeInstanceOf(Group)
    expect(resources.post).toBeInstanceOf(Post)
    expect(resources.tag).toBeInstanceOf(Tag)
    expect(resources.team).toBeInstanceOf(Team)
    expect(resources.user).toBeInstanceOf(User)
  })
})
