import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = { response: [] };

    }

    request(url = 'https://api.punkapi.com/v2/beers') {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({ response: myJson })
                console.log(JSON.stringify(myJson));
            });
    }


    componentWillMount() {
        this.request();
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
        const listBeers = this.state.response.map((beer, i) => <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
            <div class="card">
                <div class="container-fluid text-center">
                    <img src={beer.image_url} style={{ width: '50px' }} alt="" />
                </div>
                <div class="card-body">
                    <h4 class="card-title">{beer.name}</h4>
                    <p class="card-text">{beer.tagline}</p>
                </div>
            </div>
        </div>);
        return (
            <div class="container">
                <div class="row">
                    {listBeers}
                </div>

            </div>
        );
    }
}

Beers.propTypes = {

};

export default Beers;