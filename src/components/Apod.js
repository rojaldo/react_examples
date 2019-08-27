import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { response: {} };

    }

    componentWillMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ response: myJson })
                console.log(JSON.stringify(myJson));
            });
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.response)}
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;