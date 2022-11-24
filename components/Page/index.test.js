import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('Page', () => {
  it('renders the text', () => {
    const component = render((
      <Component>
        <div>children</div>
      </Component>
    ));

    expect(component.getByText(/children/i)).toBeInTheDocument();
  });
});
