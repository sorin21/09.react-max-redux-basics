import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  // state = {
  //   counter: 0
  // }

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case 'inc':
  //       this.setState((prevState) => { return { counter: prevState.counter + 1 } })
  //       break;
  //     case 'dec':
  //       this.setState((prevState) => { return { counter: prevState.counter - 1 } })
  //       break;
  //     case 'add':
  //       this.setState((prevState) => { return { counter: prevState.counter + value } })
  //       break;
  //     case 'sub':
  //       this.setState((prevState) => { return { counter: prevState.counter - value } })
  //       break;
  //   }
  // }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter} />
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map(strResult => {
           console.log(strResult);
          return  <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          })}
        </ul>
      </div>
    );
  }
}

// Store instructions about how the state
// managed by redux should be mapped to props
// you can use in this container(class from above)
// this func will be executed by react-redux package
const mapStateToProps = (state) => {
  // returns a map of propnames
  // and slices of the state stored in redux
  // state comes from reducer.js, by react
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

// This helper func calls dispatch 
// to store, behind the scene
// which kind of actions to dispacth in this container
// the props hold a reference to a function that
// will be executed to dispatch an action
const mapDispatchToProps = (dispatch) => {
  return {
    // return a call to dispatch
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT}),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: 10}),
    onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, payload: 15}),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElemId: id}),
  };
};

// connect is a function that 
// returns a HOC: Counter
// connect gives us class container with
// access to ctr property and allows us to ouput
// the ctr prop: this.props.ctr
export default connect(mapStateToProps, mapDispatchToProps)(Counter);