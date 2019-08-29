import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../model/Card';

class Trivial extends Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};

    }

    request(url = 'https://opentdb.com/api.php?amount=10') {
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

    updateList() {
        let myList = [];
        for (const card of this.response.results) {
                myList.push(new Card(card));
        }
        this.setState({cards: myList});
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
        const listCards = this.state.cards.map((card, i) => <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{card.question}</h4>
                    {card.answers.map((answer, i) => <button type="button" name="" key={i} id={i} class="btn btn-primary btn-lg btn-block">{answer}</button>)}
                </div>
            </div>
        </div>);
        return (

            <div class="container">

                <div class="row">
                    {listCards}
                </div>

            </div>
        );

    }
}

Trivial.propTypes = {

};

export default Trivial;