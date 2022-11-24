import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('PlanList', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        data={[
          {
            title: 'Free Plan',
            subtitle: 'Access to our Quick Takes and free Reports',
            button: 'Free Price',
            keyPoints: [
              'Follow the market with our Quick Takes',
              'Restricted access to certain free Reports'
            ]
          },
          {
            title: 'Professional',
            subtitle: 'Access to Quick Takes, all Reports, and 1-1s with analysts',
            button: '$50 per month',
            keyPoints: [
              'All our reports delivered to your inbox',
              'Complete access to our research archive'
            ]
          }
        ]}
      />
    ));

    expect(component.getByText(/Free Plan/i)).toBeInTheDocument();
    expect(component.getByText(/Access to our Quick Takes and free Reports/i)).toBeInTheDocument();
    expect(component.getByText(/Free Price/i)).toBeInTheDocument();
    expect(component.getByText(/Follow the market with our Quick Takes/i)).toBeInTheDocument();
    expect(component.getByText(/Restricted access to certain free Reports/i)).toBeInTheDocument();

    expect(component.getByText(/Professional/i)).toBeInTheDocument();
    expect(component.getByText(/Access to Quick Takes, all Reports, and 1-1s with analysts/i)).toBeInTheDocument();
    expect(component.getByText(/\$50 per month/i)).toBeInTheDocument();
    expect(component.getByText(/All our reports delivered to your inbox/i)).toBeInTheDocument();
    expect(component.getByText(/Complete access to our research archive/i)).toBeInTheDocument();
  });
});
