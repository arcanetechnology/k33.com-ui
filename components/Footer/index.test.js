import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('Footer', () => {
  it('renders the text', () => {
    const component = render(<Component />);
    expect(component.getByText(/All rights reserved to K33/i)).toBeInTheDocument();
  });
});
