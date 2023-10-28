import { Component, ReactNode } from 'react';

import Section from '../../ui/Section/Section';

import './ErrorBoundary.scss';

interface IErrorInfo {
  componentStack: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: IErrorInfo | null;
}

interface IErrorBoundaryProps {
  children?: ReactNode;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: IErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section>
          <h2 className="boundary__title">Something went wrong.</h2>
          <h3 className="boundary__caption">{this.state.error && this.state.error.toString()}</h3>
          <details className="boundary__info">
            <summary className="boundary__open">Details</summary>
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </Section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
