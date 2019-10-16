import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

afterEach(rtl.cleanup)

test('Renders Dashboard buttons without crashing', () => {
  const wrapper = rtl.render( <Dashboard /> )
  wrapper.debug()

  const element = wrapper.getByText(/strike/i)
  expect(element).toBeInTheDocument()
})