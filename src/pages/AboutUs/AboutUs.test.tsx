/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/AboutUs/AboutUs.test.tsx

Created with;
$ npx generate-react-cli component AboutUs --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import AboutUs from './AboutUs'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/AboutUs'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<AboutUs />', () => {
  let component

  beforeEach(() => {
    component = shallow(<AboutUs {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
