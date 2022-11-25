import { render, fireEvent } from '@testing-library/react';
import Component from './index';
import '@testing-library/jest-dom';
import 'setupJestMock';
import { act } from 'react-dom/test-utils';

describe('CallToActionInput', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;

    global.fetch = jest.fn(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({})
    }));
  });

  const mount = () => {
    const component = render(<Component />);

    return {
      component,
      input: component.getByLabelText('email-input').querySelector('input'),
      button: component.getByLabelText('email-input').querySelector('button')
    };
  };

  it('calls the endpoint', () => {
    const { component, input, button } = mount();

    fireEvent.change(input, { target: { value: 'user@example.com' } });
    expect(input.value).toBe('user@example.com');

    act(() => {
      fireEvent.click(button);
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        email: 'user@example.com'
      })
    });

    expect(component.getByText(/Check your email/i)).toBeInTheDocument();
  });

  it('shows error message', () => {
    const { component, input, button } = mount();

    fireEvent.change(input, { target: { value: 'not.a.valid.email' } });

    act(() => {
      fireEvent.click(button);
    });

    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(component.getByText(/Enter a valid email/i)).toBeInTheDocument();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });
});
