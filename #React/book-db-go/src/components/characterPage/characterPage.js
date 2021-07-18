import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import ErrorMessage from '../error';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import gotService from '../../services/gotService';

const RowBlock = (left, right) => {
  return (
    <Row>
      <Col md='6'>
        {left}
      </Col>
      <Col md='6'>
        {right}
      </Col>
    </Row>
  )
}

export default class CharacterPage extends Component {

  gotService = new gotService();

  state = {
    selectedChar: 130,
    error: false
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage />
    }

    const itemList = (
      <ItemList onCharSelected={this.onCharSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name}  (${gender})`} />
    )

    const charDetails = (
      <PersonDetails charId={this.state.selectedChar} />
    )

    return (
      <RowBlock
        left={itemList}
        right={charDetails} />
    )
  }
}