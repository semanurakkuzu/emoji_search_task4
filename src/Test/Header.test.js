import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

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
