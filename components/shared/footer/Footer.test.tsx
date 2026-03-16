import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('renders container with expected id attribute', () => {
    // Arrange
    render(<Footer />);

    // Act
    const container = screen.getByRole('contentinfo');

    // Assert
    expect(container).toHaveAttribute('id', 'footer-container');
  });

  it('renders the page title with expected id attribute', () => {
    // Arrange
    render(<Footer />);

    // Act
    const title = screen.getByRole('heading');

    // Assert
    expect(title).toHaveAttribute('id', 'footer-title');
  });
});
