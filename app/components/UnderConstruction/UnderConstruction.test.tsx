import { render, screen } from '@testing-library/react'

import { UnderConstruction } from './UnderConstruction'

describe('UnderConstruction', () => {
  it('should render its title and construction status', () => {
    render(<UnderConstruction title="Projects template" />)

    expect(
      screen.getByRole('heading', { name: 'Projects template' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Under construction')).toBeInTheDocument()
  })
})
