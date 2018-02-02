import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => { return { counter: prevState.counter + 1 } })
        break;
      case 'dec':
        this.setState((prevState) => { return { counter: prevState.counter - 1 } })
        break;
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter} />
      </div>
    );
  }
}

// Store instructions about how the state
// managed by redux should be mapped to props
// you can use in this container(class from above)
const mapStateToProps = (state) => {
  // returns a map of propnames
  // and slices of the state stored in redux
  // state comes from reducer.js, by react
  return {
    ctr: state.counter
  };
};

// which actions to dispacth in this container
// the props hold a reference to a function that
// will be executed to dispatch an action
const mapDispatchToProps = (dispatch) => {
  return {
    // return a call to dispatch
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT'}),
    onAddCounter: () => dispatch({ type: 'ADD', payload: 10}),
    onSubstractCounter: () => dispatch({ type: 'SUBSTRACT', payload: 15})
  };
};

// connect is a function that 
// returns a HOC: Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);