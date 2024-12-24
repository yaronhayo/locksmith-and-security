import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ErrorFallback from './ErrorFallback';

describe('ErrorFallback', () => {
  const mockResetErrorBoundary = vi.fn();
  const mockError = new Error('Test error message');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders error message', () => {
    render(
      <ErrorFallback 
        error={mockError} 
        resetErrorBoundary={mockResetErrorBoundary} 
      />
    );

    expect(screen.getByText(/Oops! Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Test error message/i)).toBeInTheDocument();
  });

  it('calls resetErrorBoundary when try again button is clicked', () => {
    render(
      <ErrorFallback 
        error={mockError} 
        resetErrorBoundary={mockResetErrorBoundary} 
      />
    );

    fireEvent.click(screen.getByText(/Try again/i));
    expect(mockResetErrorBoundary).toHaveBeenCalledTimes(1);
  });

  it('displays network error message for NetworkError', () => {
    const networkError = new Error('NetworkError');
    render(
      <ErrorFallback 
        error={networkError} 
        resetErrorBoundary={mockResetErrorBoundary} 
      />
    );

    expect(screen.getByText(/Unable to connect to the server/i)).toBeInTheDocument();
  });
});