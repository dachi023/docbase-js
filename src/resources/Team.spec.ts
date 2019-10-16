import axios from 'axios'
import Team from './Team'

jest.mock('axios')

describe('Team', () => {
  test('should get teams', async () => {
    const expected = [
      {
        domain: 'domain-1',
        name: 'team_1'
      },
      {
        domain: 'domain-2',
        name: 'team_2'
      }
    ]

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const team = new Team(axios, 'domain')
    const actual = await team.list()
    expect(expected).toEqual(actual.data)
  })
})
