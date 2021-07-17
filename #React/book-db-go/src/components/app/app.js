import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import ErrorMessage from '../error';
import PersonDetails from '../personDetails';

import './app.css';

export default class App extends Component {
    state = {
        showRandomChar: true,
        selectedChar: 130,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        console.log(`Person DETAILS ${this.state.selectedChar}`)

        console.log(this.electedChar)
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                            <button
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>

                            <PersonDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};