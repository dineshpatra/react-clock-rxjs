import { Component, ErrorInfo } from 'react';


/**
 * Defining type for component
 * state.
 */
type State = {
    hasError: boolean;
}

export default class CatchError extends Component {

    /**
     * Define the state of the component
     */
    state: State = {
        hasError: false
    }

    /**
     * The getDerivedStateFromError() method is 
     * invoked if some error occurs during the 
     * rendering phase of any lifecycle methods 
     * or any children components.
     * 
     * @param _error 
     */
    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    /**
     * This lifecycle method is invoked
     * after the decendant component throws
     * error
     * 
     * @param error :
     *  The error thrown by the child components
     * @param info 
     *  key containg information about which component threw error
     */
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info);
    }

    /**
     * The render() function should be pure, 
     * meaning that it does not modify component state,
     *  it returns the same result each time it’s invoked, 
     * and it does not directly interact with the browser.
     */
    render() {
        return this.state.hasError ? (
            <div>Something went wrong</div>
        ) : (
            this.props.children
        );
    }
}