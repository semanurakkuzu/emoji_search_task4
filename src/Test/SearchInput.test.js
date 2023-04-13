import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../App'

//Value was added in the input and it was checked whether the value value exists in the document
describe('Filter Emoji', () => {
  let input
  beforeEach(() => {
    render(<App />)
    input = screen.getByPlaceholderText(/Emoji Search/i)
  })
  test('emojis should be filtered', () => {
    const value = "Yum"
    userEvent.type(input,value)
    expect(screen.getByText(value)).toBeInTheDocument();
  })
})
