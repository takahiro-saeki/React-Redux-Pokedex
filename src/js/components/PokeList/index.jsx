import React from 'react';
import {PokelistItem, PokeName} from './style';

const PokeList = ({url, name}) => (
  <PokelistItem>
    <div>
      <img src={url} />
    </div>
    <PokeName>{name}</PokeName>
  </PokelistItem>
)

export default PokeList;