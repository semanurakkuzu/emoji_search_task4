import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Emoji List', () => {
  let items
  beforeEach(() => {
    render(<App/>)
    items = screen.getAllByText(/Click to copy emoji/i)
  })
  test('emojis should be listed', () => {
    expect(items.length).toEqual(20);
  })
})