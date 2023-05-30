/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/HempEffects/HempEffects.test.tsx

Created with;
$ npx generate-react-cli component HempEffects --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import HempEffects from './HempEffects'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HempEffects'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<HempEffects />', () => {
  let component

  beforeEach(() => {
    component = shallow(<HempEffects {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
