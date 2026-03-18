import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar component', () => {
  it('renders container with expected id attribute', () => {
    // Arrange
    render(<Navbar />);

    // Act
    const container = screen.getByRole('navigation');

    // Assert
    expect(container).toHaveAttribute('id', 'navbar-container');
  });

  it('renders the page title with expected id attribute', () => {
    // Arrange
    render(<Navbar />);

    // Act
    const title = screen.getByRole('heading');

    // Assert
    expect(title).toHaveAttribute('id', 'navbar-title');
  });
});
