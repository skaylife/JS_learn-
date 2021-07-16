import React, { Component } from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../error/errorMessage';


export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService()

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25); // генератор от 25-140
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture
                })
            });
    }

    render() {

        const { name, gender, born, died, culture } = this.state;

        return (
            <>
                <h5>Random Character:</h5>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </>
        )
    }
}