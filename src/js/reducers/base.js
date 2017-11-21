import actions from 'actions';

const defaultParam = {
  sample: 'test'
};

const base = (state = defaultParam, action) => {
  switch (action.type) {
    case 'BASE': return state;
    case 'INIT': {
      const merge = Object.assign({}, state, action.param)
      return merge
    }
    default:
      return state;
  }
};

export default base;
