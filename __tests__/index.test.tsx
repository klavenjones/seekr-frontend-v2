import { render, screen } from '@testing-library/react';
import Home from '../pages';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome to Seekr');
  });
});
