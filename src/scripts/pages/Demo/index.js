import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import * as CounterActions from '../../actions/CounterActions';

@connect(state => ({ counter: state.counter }))
export default class Demo extends Component {
  render() {
    const { counter = 0, dispatch } = this.props;
    return (
      <div>
        <h1>tss</h1>
        <Counter counter={counter}
          {...bindActionCreators(CounterActions, dispatch)} />
      </div>
    );
  }
}
