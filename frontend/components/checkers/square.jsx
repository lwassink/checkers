import React from 'react';

export default ({ pos }) => {
  const color = (pos[0] + pos[1]) % 2 == 0 ? 'white' : 'black';
  const cls = color + ' square';

  return (
    <li className={ cls }>
    </li>
  );
}

