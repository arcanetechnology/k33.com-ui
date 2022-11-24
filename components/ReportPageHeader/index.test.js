import { render } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';

describe('ReportPageHeader', () => {
  it('renders the text', () => {
    const component = render((
      <Component
        title="The Friday Focus."
        subtitle="A summary of the most important news of the week"
      />
    ));

    expect(component.getByText(/The Friday Focus./i)).toBeInTheDocument();
    expect(component.getByText(/A summary of the most important news of the week/i)).toBeInTheDocument();
  });
});
