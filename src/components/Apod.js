import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


class Apod extends Component {
    constructor(props) {
        super(props);

        this.state = { response: { date: moment(new Date()).format("YYYY-MM-DD") } };
        this.startDate = new Date();
        this.requesting = false;
    }

    componentWillMount() {
        this.request();
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

    handleChange = date => {
        this.startDate = date;
        const url = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo' +
            '&date=' + moment(this.startDate).format("YYYY-MM-DD");
        console.log(url);
        this.request(url);

    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <DatePicker selected={new Date(this.state.response.date)} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                    </div>
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