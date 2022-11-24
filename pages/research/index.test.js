import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('ResearchPage', () => {
  it('renders the hero text', () => {
    const component = render(<Component />);
    expect(component.getByTestId('heroText')).toHaveTextContent(/Get real insight from industry experts/);
  });
});
