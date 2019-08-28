import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = {response: {}};

    }

    componentWillMount() {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo' +
            '&date=' + this.props.date;
        console.log(url);
        this.request(url);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo' +
            '&date=' + nextProps.date;
        this.request(url);

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

    request(url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo') {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ response: myJson })
                console.log(JSON.stringify(myJson));
            });
    }

    render() {
        return (
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

        );
    }
}

ShowApod.propTypes = {

};

export default ShowApod;