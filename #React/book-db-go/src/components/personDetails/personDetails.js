import React, { Component } from 'react';
import './personDetails.css';
import gotService from '../../services/gotService';

const Field = ({ char, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>)
}

export {
    Field
}

export default class PersonDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updataChar();
    }

    //Условие которое перезаписывает согласно нажатому персонажу
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updataChar();
        }
    }

    updataChar() {
        // { id, name, url, gender, born, died, culture } = item;
        const { charId } = this.props;
        // console.log(`Person DETAILS222 ${this.props.item}`)

        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char })
            })
        // this.foo.bar = 0;
    }

    render() {

        if (!this.state.char) {
            return <span className="">Выберите персонажа</span>
        }

        const { char } = this.state;

        const { name } = char

        return (
            <div className="person-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { char })
                        })
                    }
                </ul>
            </div>
        );
    }
}