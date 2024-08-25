import { render, screen } from '@testing-library/react'

import Home from '../../pages/home'

test('renders Home page with logo and message', () => {
  render(<Home />)

  // Check that the logo is present
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument()

  // Check that the message from the pastor is present
  expect(screen.getByText(/message from the pastor/i)).toBeInTheDocument()
})
