import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


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
                <div class="container">
                <Jumbotron>
                    <h1>{this.state.response.title}</h1>
                    <img src={this.state.response.url} width="100%" alt=""></img>
                    <p>
                        {this.state.response.explanation}
                        </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                    
                </div>
                {JSON.stringify(this.state.response)}
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;