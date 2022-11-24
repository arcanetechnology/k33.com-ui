import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('SectionTitle', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        text="Choose a plan that’s right for you"
      />
    ));

    expect(component.getByText(/Choose a plan that’s right for you/i)).toBeInTheDocument();
  });
});
