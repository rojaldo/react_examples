import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Hero } from '../model/Hero';

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.heroes = [new Hero('Batman','Dark knight'),
        new Hero('Spiderman', 'Spidy'),
        new Hero('Superman', 'man of steel')];
        this.state = {
            newHero: new Hero(), listHeroes: this.updateList()
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    }

    handleNameChange(event) {
        this.setState({ newHero: new Hero(event.target.value, this.state.newHero.description) });
    }

    handleDescriptionChange(event) {
        this.setState({ newHero: new Hero(this.state.newHero.name, event.target.value) });
    }

    updateList() {
        return this.heroes.map(
            (hero, i) => <ListGroup.Item key={i}>
                <b>{hero.name}</b>
                <br />
                <p>{hero.description}</p>
            </ListGroup.Item>)
    }

    addHero() {
        this.heroes = [...this.heroes, this.state.newHero];
        this.setState({
            newHero: new Hero(),
            listHeroes: this.updateList()
        })
    }

    render() {
        return (
            <div>
                <label className="p-1">
                    Name
                        <input type="text"
                        value={this.state.newHero.name}
                        onChange={this.handleNameChange} />
                </label>
                <br></br>
                <label className="p-1">
                    Description
                        <input type="text"
                        value={this.state.newHero.description}
                        onChange={this.handleDescriptionChange} />
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