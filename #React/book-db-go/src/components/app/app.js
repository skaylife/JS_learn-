import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import { CharacterPage, BooksPage, HousesPage, BooksItem } from '../pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import './app.css';
import ItemList from '../itemList';

export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,

        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }



    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        if (this.state.error) {
            return <ErrorMessage />
        }


        const char = this.state.showRandomChar ? <RandomChar /> : null;
        return (
            <div className="app">
                <Router>

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
                        <Route path='/' exact component={() => <h1> GOGOOGOGGOG </h1>} />

                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/houses' component={HousesPage} />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                <BooksItem bookId={id} />
                            }
                        } />
                    </Container>
                </Router>

            </div>
        );
    }
};