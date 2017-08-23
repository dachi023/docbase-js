import test from 'ava'

import constants from '../src/constants'

test('get baseUrl', t => {
  const actual = constants.baseUrl
  const expected = `${constants.protocol}://${constants.host}`
  t.is(actual, expected)
})
