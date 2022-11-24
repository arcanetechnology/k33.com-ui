import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('AboutPage', () => {
  it('renders the hero text', () => {
    const component = render(<Component />);
    expect(component.getByTestId('heroText')).toHaveTextContent(/Safe. Secure. Digital Assets./);
  });
});
