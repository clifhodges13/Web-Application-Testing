import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

afterEach(rtl.cleanup)

test('Renders Display with 0\'s', () => {
  const wrapper = rtl.render(<Display />)
  wrapper.debug()

  const element = wrapper.getByText(/strikes/i)

  expect(element).toHaveTextContent(/strike/i)
})
