import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBeers: []
        };
        this.value = { min: 2, max: 10 };
        this.response = [];
    }

    request(url = 'https://api.punkapi.com/v2/beers') {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // this.setState({ response: myJson });
                this.response = myJson;
                this.updateList();
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
        console.log('componentWillUpdate');
        // this.updateList();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    updateList() {
        let myList = [];
        for (const beer of this.response) {
            if(beer.abv >= this.value.min && beer.abv <= this.value.max) {
                myList.push(beer);
            }
        }
        this.setState({listBeers: myList});
    }

    render() {

        const listBeers = this.state.listBeers.map((beer, i) => <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
            <div class="card">
                <div class="container-fluid text-center">
                    <img src={beer.image_url} style={{ width: '50px' }} alt="" />
                </div>
                <div class="card-body">
                    <h4 class="card-title">{beer.name}</h4>
                    <p class="card-text">{beer.abv}</p>
                    <p class="card-text">{beer.tagline}</p>
                </div>
            </div>
        </div>);
        return (

            <div class="container">
                <div class="row">
                    <InputRange
                        maxValue={50}
                        minValue={0}
                        value={this.value}
                        onChange={value => {this.value = value; this.updateList()}} />
                </div>

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