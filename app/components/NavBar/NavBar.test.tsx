import { NavBar } from '~/components/NavBar/NavBar'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

describe('NavBar', () => {
  it('should contain avatar and site name', () => {
    render(<NavBar />, { wrapper: MemoryRouter });

    const avatar = screen.getByRole('img')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('MuiAvatar-img')
    expect(screen.getAllByRole('link').at(0)).toHaveTextContent('dysbo.me')
  })
})
