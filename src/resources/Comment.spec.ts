import axios from 'axios'
import Comment from './Comment'

jest.mock('axios')

describe('Comment', () => {
  test('should post comment', async () => {
    const expected = {
      id: 1,
      body: 'body_1',
      created_at: '2019-01-01T00:00:00+09:00',
      user: {
        id: 1,
        name: 'user_1',
        profile_image_url: 'https://example.com/user_1.png'
      }
    }

    // @ts-ignore
    axios.post.mockResolvedValue({ data: expected })
    const comment = new Comment(axios, 'domain')
    const actual = await comment.post(1, expected.body)
    expect(expected).toEqual(actual.data)
  })

  test('should delete comment', async () => {
    // @ts-ignore
    axios.delete.mockResolvedValue({ data: null })
    const comment = new Comment(axios, 'domain')
    const actual = await comment.delete(1)
    expect(null).toEqual(actual.data)
  })
})
