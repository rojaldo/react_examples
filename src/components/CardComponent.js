import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {card: props.card};

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

    handleCLick(index) {
        let card = this.state.card;
        card.answered = true;
        card.rightAnswered = (card.answers[index] === card.correctAnswer);
        this.setState({card: card});
        console.log('handleClick');
    }

    getClass(index){
        return 'btn btn-secondary btn-lg btn-block';
    }

    render() {
        let buttons = <div></div>;
        if(this.state.card.answered){
            buttons = this.state.card.answers.map((answer, i) =>
            <button type="button" disabled name="" key={i} id={i} className={this.getClass(i)}>
                {answer}
            </button>)
        }else {
            buttons = this.state.card.answers.map((answer, i) =>
            <button type="button" onClick={(i)=>this.handleCLick(i)} name="" key={i} id={i} className="btn btn-primary btn-lg btn-block">
                {answer}
            </button>)
        }
        return (
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.state.card.question}</h4>
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}

CardComponent.propTypes = {

};

export default CardComponent;