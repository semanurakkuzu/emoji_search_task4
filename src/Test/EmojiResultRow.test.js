import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Copy Emoji', () => {
  let item, text
  beforeEach(() => {
    render(<App/>)
    item = screen.getByText(/yum/i)
    text = "Yum"
  })
  test('emoji should be copied', () => {
    userEvent.click(item)
   expect(item).toHaveTextContent(text)
  })
})