import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Problem from './Problem';

describe('custom hooks problem', () => {
  let consoleError;

  beforeEach(() => {
    jest.useFakeTimers();
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
    jest.useRealTimers();
  });

  test('does not update state after unmounting', () => {
    const { unmount } = render(<Problem />);

    unmount();
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const hasUnmountedUpdateWarning = consoleError.mock.calls.some(([message]) =>
      /state update on an unmounted component/i.test(String(message))
    );

    expect(hasUnmountedUpdateWarning).toBe(false);
  });
});
