/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/ContactUs/ContactUs.test.tsx

Created with;
$ npx generate-react-cli component ContactUs --type=page

*/

import React from 'react'
import { shallow } from 'enzyme'
import ContactUs from './ContactUs'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/ContactUs'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<ContactUs />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ContactUs {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
