import React, { Component } from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../error/errorMessage';


export default class RandomChar extends Component {
    render() {



        return (
            <>
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>11.31.1234</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>13.21.1948</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </>
        )
    }
}