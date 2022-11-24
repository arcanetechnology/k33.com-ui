import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('ComingSoon', () => {
  it('renders the text', () => {
    const component = render(<Component />);
    expect(component.getByText(/Coming Soon/i)).toBeInTheDocument();
  });
});
