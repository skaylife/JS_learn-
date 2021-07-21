import React, { Component } from 'react';
import './itemList.css';
import ErrorMessage from '../error';
import Spinner from '../spinner/';
import PropTypes from 'prop-types';



export default class ItemList extends Component {



    state = {
        itemList: null,
        error: false
    }
    static defaultProps = {
        onItemSelected: () => {

        }
    }

    static propTypes = {
        onItemSelected: PropTypes.func
    }



    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
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
            // console.log(item)

            const label = this.props.renderItem(item);

            const { id, name, url, gender, born, died, culture } = item;
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(391 + i)}
                >
                    {label}
                </li>
            )
        })
    }


    render() {
        const { itemList, error } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

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
