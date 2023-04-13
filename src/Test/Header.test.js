import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

// Checked if there is a header in the document
describe('Header Render', () => {
  let header
  beforeEach(() => {
    render(<App />)
    header = screen.getByText('Emoji Search')
  })
  test('header must be in the document', () => {
    expect(header).toBeInTheDocument()
  })
})
