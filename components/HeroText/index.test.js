import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('HeroText', () => {
  it('renders the text', () => {
    const component = render(<Component text="Hero Text" />);
    expect(component.getByText(/Hero text/i)).toBeInTheDocument();
  });
});
