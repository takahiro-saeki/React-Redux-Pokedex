import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { process_dom } from 'pokesprite';

const App = ({ base }) => (
  <div onClick={() => base()}>
    <div>test</div>
  </div>
)

const mapStateToProps = state => ({ base: state.base });

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);