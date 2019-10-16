import axios from 'axios'
import Tag from './Tag'

jest.mock('axios')

describe('Tag', () => {
  test('should get tags', async () => {
    const expected = [
      {
        name: 'tag_1'
      },
      {
        name: 'tag_2'
      }
    ]

    // @ts-ignore
    axios.get.mockResolvedValue({ data: expected })
    const tag = new Tag(axios, 'domain')
    const actual = await tag.list()
    expect(expected).toEqual(actual.data)
  })
})
