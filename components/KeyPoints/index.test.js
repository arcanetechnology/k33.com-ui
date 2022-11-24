import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('KeyPoints', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        keyPoints={[
          'Be prepared for tomorrow’s price action',
          'Data-driven analysis of spot and derivatives'
        ]}
      />
    ));

    expect(component.getByText(/Be prepared for tomorrow’s price action/i)).toBeInTheDocument();
    expect(component.getByText(/Data-driven analysis of spot and derivatives/i)).toBeInTheDocument();
  });
});
