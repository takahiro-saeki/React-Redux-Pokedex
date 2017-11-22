import actions from 'actions';
import PATH from 'PATH';

const defaultParam = [];

const base = (state = defaultParam, action) => {
  switch (action.type) {
    case 'INIT': {
      const monsterData = [];
      for (let item of action.param.pokemon_entries) {
        if (monsterData.length > 19) {
          break;
        }
        const optimize = {
          name: item.pokemon_species.name,
          image_url: PATH.IMAGE(item.entry_number)
        };
        monsterData.push(optimize);
      }

      return monsterData;
    }
    default:
      return state;
  }
};

export default base;
