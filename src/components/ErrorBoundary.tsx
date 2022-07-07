import React, { ErrorInfo } from 'react';

type Props = React.PropsWithChildren<unknown>;
class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Someting wrong..</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
