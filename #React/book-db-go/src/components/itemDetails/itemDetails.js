import React, { Component } from 'react';
import './itemDetails.css';


const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>)
}

export {
    Field
}

export default class ItemDetails extends Component {



    state = {
        item: null
    }

    componentDidMount() {
        this.updataItem();
    }

    //Условие которое перезаписывает согласно нажатому персонажу
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updataItem();
        }
    }

    updataItem() {
        // { id, name, url, gender, born, died, culture } = item;
        const { itemId, getData } = this.props;
        // console.log(`Person DETAILS222 ${this.props.item}`)

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item })
            })
        // this.foo.bar = 0;
    }

    render() {

        if (!this.state.item) {
            return <span className="">Выберите персонажа</span>
        }

        const { item } = this.state;

        const { name } = item

        return (
            <div className="person-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        );
    }
}