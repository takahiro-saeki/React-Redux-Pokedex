import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';
import PokeList from 'components/PokeList';
import uuid from 'uuid';
import PokeListContainer from './style';

const App = ({ base }) => (
  <div>
    <PokeListContainer>
      {base.map(item => <PokeList name={item.name} url={item.image_url} key={uuid.v4()} />)}
    </PokeListContainer>
  </div>
)

const mapStateToProps = state => ({ base: state.base });

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);