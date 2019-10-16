import axios from 'axios'
import Group from './Group'

jest.mock('axios')

describe('Group', () => {
  test('should get user groups', async () => {
    const expected = [
      {
        id: 1,
        name: 'group_1'
      },
      {
        id: 2,
        name: 'group_2'
      }
    ]

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const group = new Group(axios, 'domain')
    const actual = await group.list({ name: 'group_1', page: 1, per_page: 2 })
    expect(expected).toEqual(actual.data)
  })

  test('should get user group', async () => {
    const expected = {
      id: 1,
      name: 'group_1',
      description: 'description_1',
      posts_count: 10,
      last_activity_at: '2019-01-01T00:00:00+09:00',
      created_at: '2019-01-01T00:00:00+09:00',
      users: [
        {
          id: 1,
          name: 'user_1',
          profile_image_url: 'https://example.com/user_1.png'
        }
      ]
    }

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const group = new Group(axios, 'domain')
    const actual = await group.get(1)
    expect(expected).toEqual(actual.data)
  })

  test('should add user group', async () => {
    const expected = {
      id: 2,
      name: 'group_2',
      description: 'description_2',
      posts_count: 0,
      last_activity_at: '2019-01-01T00:00:00+09:00',
      created_at: '2019-01-01T00:00:00+09:00',
      users: [
        {
          id: 1,
          name: 'user_1',
          profile_image_url: 'https://example.com/user_1.png'
        }
      ]
    }

    // @ts-ignore
    axios.post.mockResolvedValue({ data: expected })
    const group = new Group(axios, 'domain')
    const actual = await group.post(expected.name, expected.description)
    expect(expected).toEqual(actual.data)
  })

  test('should add users', async () => {
    // @ts-ignore
    axios.post.mockResolvedValue({ data: null })
    const group = new Group(axios, 'domain')
    const actual = await group.joinUsers(1, [2, 3])
    expect(null).toEqual(actual.data)
  })

  test('should delete users', async () => {
    // @ts-ignore
    axios.delete.mockResolvedValue({ data: null })
    const group = new Group(axios, 'domain')
    const actual = await group.leaveUsers(1, [1, 2, 3])
    expect(null).toEqual(actual.data)
  })
})
