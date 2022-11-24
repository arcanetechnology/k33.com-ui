import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('FridayFocusPage', () => {
  it('renders the hero text', () => {
    const component = render(<Component />);
    expect(component.getByTestId('reportPageHeader')).toHaveTextContent(/The Friday Focus./);
  });
});
