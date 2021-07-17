import React, { Component } from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
import ErrorMessage from '../error';
import Spinner from '../spinner/';



export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }
    componentDidMount() {


        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    error: false
                });
            })
            .catch(() => { this.onError() });
    }
    componentDidCatch() {
        this.setState({
            charList: null,
            error: true
        })
    }
    onError(status) {
        this.setState({
            charList: null,
            error: true
        })
    }
    renderItems(arr) {
        return arr.map((item, i) => {
            console.log(item)
            const { id, name, url, gender, born, died, culture } = item;
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(i)}
                >
                    {name}
                </li>
            )
        })
    }


    render() {
        const { charList, error } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}

            </ul>
        );
    }
}


                // let sendData = (obj) => {
                //     setFormClass('hide');
                //     setLineClass('');
                //     fetch(env.urlBackend, {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/x-www-form-urlencoded',
                //         },
                //         body: JSON.stringify(obj)
                //     })
                //         .then(response => response.json())
                //         .then(response => {
                //             console.log(response);
                //             if (response.result) {
                //                 setUrl(env.url + "/" + response.url);
                //             }
                //         })
                // }
