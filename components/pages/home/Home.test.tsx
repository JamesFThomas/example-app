import { render, screen } from '@testing-library/react';
import { HomePage } from './Home';
import '@testing-library/jest-dom';

describe('Home component', () => {
  it('renders container with expected id attribute', () => {
    // Arrange
    render(<HomePage />);

    // Act
    const container = screen.getByRole('main');

    // Assert
    expect(container).toHaveAttribute('id', 'homepage-container');
  });

  it('renders the page title with expected id attribute', () => {
    // Arrange
    render(<HomePage />);

    // Act
    const title = screen.getByRole('heading');

    // Assert
    expect(title).toHaveAttribute('id', 'homepage-title');
  });
});
