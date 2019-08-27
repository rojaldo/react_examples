import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.heroes = ['Batman', 'Superman', 'Spiderman'];
        this.state = {
            newHero: '', listHeroes: this.heroes.map(
                (hero, i) => <ListGroup.Item key={i}>{hero}</ListGroup.Item>)
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ newHero: event.target.value });
    }

    addHero() {
        this.heroes = [...this.heroes, this.state.newHero];
        this.setState({ newHero:'', 
            listHeroes: this.heroes.map(
                (hero, i) => <ListGroup.Item key={i}>{hero}</ListGroup.Item>)
        });
    }

    render() {
        return (
            <div>
                <label className="p-1">
                    Name 
                        <input type="text"
                        value={this.state.newHero}
                        onChange={this.handleChange} />
                </label>
                <Button className="ml-2" onClick={() => this.addHero()}>Add Hero</Button>
                <ListGroup>
                    {this.state.listHeroes}
                </ListGroup>
            </div>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;