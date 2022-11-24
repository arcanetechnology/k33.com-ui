import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('ReportPageReportSection', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        title="The Friday Focus."
        keyPoints={[
          'Coverage across web, Twitter, Discord and Telegram',
          'Links to original sources'
        ]}
      />
    ));

    expect(component.getByText(/The Friday Focus./i)).toBeInTheDocument();
    expect(component.getByText(/Coverage across web, Twitter, Discord and Telegram/i)).toBeInTheDocument();
    expect(component.getByText(/Links to original sources/i)).toBeInTheDocument();
  });
});
