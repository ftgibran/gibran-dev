import { Component, ErrorInfo, PropsWithChildren } from 'react'

export interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service if needed
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return null
  }
}
