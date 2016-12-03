import React from 'react';
import classNames from 'classnames';

const CurrentPlayer = ({ cls, color }) => (
  <p className='display'>
    Current Player:&nbsp;
    <span className={cls}>
      {color}
    </span>
  </p>
);

const Winner = ({ cls, color }) => (
  <p className='display'>
    <span
      className={cls}>
      {color}&nbsp;
    </span>
    Wins
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

    let winner;
    if (winnerColor) {
      if (winnerColor === 'dark') color = 'Black';
      winner = <Winner cls={winnerColor} color={color} />
    } else {
      if (currentColor === 'dark') color = 'Black';
      winner = <CurrentPlayer cls={currentColor} color={color} />
    }

    return (
      <div className="flip">
        {winner}
      </div>
    );
  }
}

export default Display;

