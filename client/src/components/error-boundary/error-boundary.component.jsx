import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary-styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error){
        return { hasErrored: true }
    };

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={'https://i.imgur.com/Q2BAOd2.png'}/>
                <ErrorImageText> Opps, something went wrong, this page is not found.</ErrorImageText>
            </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;