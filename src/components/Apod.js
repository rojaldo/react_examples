import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import ShowApod from './ShowApod';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = { startDate: new Date() };
    }

    componentWillMount() {
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
        this.setState({startDate: date});

    };

    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy-MM-dd" />
                    </div>
                    {moment(this.state.startDate).format("YYYY-MM-DD")}
                    <ShowApod date={moment(this.state.startDate).format("YYYY-MM-DD")}></ShowApod>
                </div>
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;