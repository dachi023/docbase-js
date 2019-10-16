import axios from 'axios'
import Post, { DocBasePostScope } from './Post'

const dummyPost = {
  id: 1,
  title: 'title_1',
  body: 'body_1',
  draft: false,
  archived: false,
  url: 'https://example.com/posts/1',
  created_at: '2019-01-01T00:00:00+09:00',
  scope: 'group',
  sharing_url: 'https://example.com/posts/1/sharing/abcdefgh-0e81-4567-9876-1234567890ab',
  tags: [{ name: 'tag_1' }],
  user: { id: 1, name: 'user_1', profile_image_url: 'https://example.com/user_1.png' },
  stars_count: 1,
  good_jobs_count: 2,
  comments: [
    {
      id: 1,
      body: 'body_1',
      created_at: '2019-01-01T00:00:00+09:00',
      user: { id: 2, name: 'user_2', profile_image_url: 'https://example.com/user_2.png' }
    }
  ],
  groups: [{ id: 1, name: 'group_1' }]
}

jest.mock('axios')

describe('Post', () => {
  test('should get posts', async () => {
    const expected = {
      posts: [dummyPost],
      meta: {
        previous_page: null,
        next_page: 'https://example.com/teams/example/posts?page=2&per_page=1&q=abc',
        total: 10
      }
    }

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const post = new Post(axios, 'domain')
    const actual = await post.list({ page: 1, per_page: 1, q: 'abc' })
    expect(expected).toEqual(actual.data)
  })

  test('should get post', async () => {
    const expected = dummyPost

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const post = new Post(axios, 'domain')
    const actual = await post.get(1)
    expect(expected).toEqual(actual.data)
  })

  test('should add post', async () => {
    const expected = { ...dummyPost, comments: [] }
    const scope: DocBasePostScope = 'group'
    const params = {
      draft: false,
      groups: [1],
      notice: true,
      scope,
      tags: ['tag_1']
    }

    // @ts-ignore
    axios.post.mockResolvedValue({ data: expected })
    const post = new Post(axios, 'domain')
    const actual = await post.post('title_1', 'body_1', params)
    expect(expected).toEqual(actual.data)
  })

  test('should add post', async () => {
    const scope: DocBasePostScope = 'everyone'
    const params = {
      scope,
      body: 'body_1_updated',
      draft: !dummyPost.draft,
      groups: [],
      notice: true,
      tags: [],
      title: 'title_1_updated'
    }

    const expected = { ...dummyPost, ...params }

    // @ts-ignore
    axios.patch.mockResolvedValue({ data: expected })
    const post = new Post(axios, 'domain')
    const actual = await post.patch(1, params)
    expect(expected).toEqual(actual.data)
  })

  test('should delete post', async () => {
    // @ts-ignore
    axios.delete.mockResolvedValue({ data: null })
    const post = new Post(axios, 'domain')
    const actual = await post.delete(1)
    expect(null).toEqual(actual.data)
  })

  test('should archive post', async () => {
    // @ts-ignore
    axios.put.mockResolvedValue({ data: null })
    const post = new Post(axios, 'domain')
    const actual = await post.archive(1)
    expect(null).toEqual(actual.data)
  })

  test('should unarchive post', async () => {
    // @ts-ignore
    axios.put.mockResolvedValue({ data: null })
    const post = new Post(axios, 'domain')
    const actual = await post.unarchive(1)
    expect(null).toEqual(actual.data)
  })
})
