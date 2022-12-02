import React from 'react';
import { Users } from '../App';

const Card: React.FC<Users> = ({ id, name }) => {
  return (
    <div>
      <p style={id % 2 === 0 ? { color: 'red' } : { color: 'green' }}>{name}</p>
    </div>
  );
};

export default Card;
