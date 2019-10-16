import clientFactory from './clientFactory'

describe('clientFactory', () => {
  test('is set values', () => {
    const actual = {
      baseURL: 'https://example.com',
      timeout: 1000,
      token: 'DocBaseAccessToken',
      version: 2
    }

    const client = clientFactory(actual)
    const { baseURL, headers, timeout } = client.defaults

    expect(baseURL).toBe(actual.baseURL)
    expect(timeout).toBe(actual.timeout)
    expect(headers['X-DocBaseToken']).toBe(actual.token)
    expect(headers['X-Api-Version']).toBe(actual.version)
  })
})
