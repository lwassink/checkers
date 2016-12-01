import React from 'react';
import classNames from 'classnames';

const CurrentPlayer = ({ cls, color }) => (
  <p className='display'>
    Current Player: <span
      className={cls}>
      {color}
    </span>
  </p>
);

const Winner = ({ cls, color }) => (
  <p className='display'>
    Winner: <span
      className={cls}>
      {color}
    </span>
  </p>
);

class Display extends React.Component {

  componentWillReceiveProps() {
    const { oneCount, twoCount, setWinner } = this.props;
    if (oneCount === 0) setWinner(2);
    if (twoCount === 0) setWinner(1);
  }

  render() {
    const { currentColor, winnerColor } = this.props;
    let color = 'Red';

    if (winnerColor) {
      if (winnerColor === 'dark') color = 'Black';
      return <Winner cls={winnerColor} color={color} />
    } else {
      if (currentColor === 'dark') color = 'Black';
      return <CurrentPlayer cls={currentColor} color={color} />
    }
  }
}

export default Display;

