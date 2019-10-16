import axios from 'axios'
import User from './User'

jest.mock('axios')

describe('User', () => {
  test('should get users', async () => {
    const expected = [
      {
        id: 1,
        name: 'name_1',
        username: 'username_1',
        profile_image_url: 'https://example.com/user_1.png',
        role: 'owner',
        posts_count: 2,
        last_access_time: '2019-01-01T00:00:00+09:00',
        two_step_authentication: true,
        groups: [
          {
            id: 1,
            name: 'group_1'
          }
        ]
      },
      {
        id: 2,
        name: 'name_1',
        username: 'username_2',
        profile_image_url: 'https://example.com/user_2.png',
        role: 'admin',
        posts_count: 3,
        last_access_time: '2019-01-01T00:00:00+09:00',
        two_step_authentication: true,
        groups: []
      },
      {
        id: 3,
        name: 'name_3',
        username: 'username_3',
        profile_image_url: 'https://example.com/user_3.png',
        role: 'user',
        posts_count: 5,
        last_access_time: '2019-01-01T00:00:00+09:00',
        two_step_authentication: false,
        groups: []
      }
    ]

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const user = new User(axios, 'domain')
    const actual = await user.list()
    expect(expected).toEqual(actual.data)
  })
})
