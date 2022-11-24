import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('HeroTopSection', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        heroText="Get real insight from industry experts"
        subText="Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter."
      />
    ));

    expect(component.getByText(/Get real insight from industry experts/i)).toBeInTheDocument();
    expect(component.getByText(/Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter./i)).toBeInTheDocument();
  });
});
