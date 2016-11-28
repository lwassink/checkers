import React from 'react';
import classNames from 'classnames';

export default ({ currentColor }) => {
  let color = 'Red';
  if (currentColor === 'dark') color = 'Black';

  const cls = classNames(
    { 'light': currentColor === 'light' },
    { 'dark': currentColor === 'dark' }
  );

  return (
    <p
      className='display'>
      Current Player: <span
        className={cls}>
        {color}
      </span>
    </p>
  )
}

