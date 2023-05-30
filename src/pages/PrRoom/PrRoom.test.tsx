/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/PrRoom/PrRoom.test.tsx

Created with;
$ npx generate-react-cli component PrRoom --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import PrRoom from './PrRoom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/PrRoom'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<PrRoom />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PrRoom {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
