import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h1 className="text-white mb-3">{counter}</h1>
      <button onClick={inc} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Dec</button>
      <button onClick={dec} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Inc</button>
      <button onClick={rnd} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Rnd</button>
    </div>
  )
}

const mapStateTopProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateTopProps, mapDispatchToProps)(Counter);