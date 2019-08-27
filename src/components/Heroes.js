import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';


class Heroes extends Component {
    constructor(props) {
        super(props);
        this.heroes = ['Batman', 'Superman', 'Spiderman'];
        this.listHeroes = this.heroes.map(
            (hero, i) => <ListGroup.Item key={i}>{hero}</ListGroup.Item>);
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {this.listHeroes}
                </ListGroup>
            </div>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;