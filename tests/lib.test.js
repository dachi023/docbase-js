import test from 'ava'

import DocBase, {
  Memo,
  Team
} from '../lib/index'

test('import DocBase', t => {
  t.truthy(DocBase)
})

test('import Resouces', t => {
  t.truthy(Memo)
  t.truthy(Team)
})
