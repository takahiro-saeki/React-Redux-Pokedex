import actions from 'actions';

const defaultParam = {
  sample: 'test'
};

const base = (state = defaultParam, action) => {
  switch (action.type) {
    case 'base': return state 
    default:
      return state;
  }
};

export default base;
