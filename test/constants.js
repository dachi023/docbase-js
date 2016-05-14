import assert from 'power-assert'
import constants from '../app/constants'

it ('get docbase base url', () => {
  assert(constants.baseUrl === `${constants.protocol}://${constants.host}`)
})
