import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('FeatureList', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        data={[
          {
            title: 'Get real insight',
            subtitle: 'Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter.',
            keyPoints: [
              'Weekly reports delivered to your inbox',
              'Monthly webinars',
            ]
          },
          {
            title: 'Trade with conviction',
            subtitle: 'Secure custody, best execution across multiple exchanges, with real time in-person service & support.',
            keyPoints: [
              'Bespoke service via chat, call, or in-person',
              'Market leading rates on USD FX conversion',
            ]
          }
        ]}
      />
    ));

    expect(component.getByText(/Get real insight/i)).toBeInTheDocument();
    expect(component.getByText(/Trade with conviction/i)).toBeInTheDocument();

    expect(component.getByText(/Understand the digital assets industry, gain insight into the markets, and go deep on the protocols that matter./i)).toBeInTheDocument();
    expect(component.getByText(/Secure custody, best execution across multiple exchanges, with real time in-person service & support./i)).toBeInTheDocument();

    expect(component.getByText(/Monthly webinars/i)).toBeInTheDocument();
    expect(component.getByText(/Market leading rates on USD FX conversion/i)).toBeInTheDocument();
  });
});
