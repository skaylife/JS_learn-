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
        char: {},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25); // генератор от 25-140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {

        const { char, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <View char={char} /> : null;

        return (
            <>
                <div className="random-block rounded">
                    {spinner}
                    {content}
                </div>
            </>
        )
    }
}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char
    return (
        <>
            <div className="title-random">
                <p>Random Character:
                    <strong className="title"> {name}</strong>
                </p>
            </div>

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