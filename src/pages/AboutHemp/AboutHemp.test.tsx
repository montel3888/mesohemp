/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/AboutHemp/AboutHemp.test.tsx

Created with;
$ npx generate-react-cli component AboutHemp --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import AboutHemp from './AboutHemp'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/AboutHemp'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<AboutHemp />', () => {
  let component

  beforeEach(() => {
    component = shallow(<AboutHemp {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
