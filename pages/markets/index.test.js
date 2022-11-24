import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('MarketsPage', () => {
  it('renders the hero text', () => {
    const component = render(<Component />);
    expect(component.getByTestId('heroText')).toHaveTextContent(/Trade across multiple markets and exchanges/);
  });
});
