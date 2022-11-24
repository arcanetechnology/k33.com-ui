import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('FeatureSummaryList', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        data={[
          {
            imageSrc: '/lof-research.png',
            imageWidth: 110,
            imageHeight: 110,
            title: 'Get real insight',
            text: 'Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter.'
          },
          {
            imageSrc: '/lof-research.png',
            imageWidth: 110,
            imageHeight: 110,
            title: 'Trade with conviction',
            text: 'Secure custody, best execution across multiple exchanges, with real time in-person service & support.'
          }
        ]}
      />
    ));

    expect(component.getByText(/Get real insight/i)).toBeInTheDocument();
    expect(component.getByText(/Trade with conviction/i)).toBeInTheDocument();

    expect(component.getByText(/Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter./i)).toBeInTheDocument();
    expect(component.getByText(/Secure custody, best execution across multiple exchanges, with real time in-person service & support./i)).toBeInTheDocument();
  });
});
