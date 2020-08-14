import React from 'react';

import css from './ErrorBoundary.module.css';

interface State {
    error?: Error;
}

class ErrorBoundary extends React.Component<Record<string, unknown>, State> {
    constructor(props: Readonly<Record<string, unknown>>) {
        super(props);
        this.state = { error: undefined };
    }

    static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    render(): React.ReactNode {
        if (this.state.error) {
            return (
                <div className={css.container}>
                    <h1 className={css.headline}>Something went wrong</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
