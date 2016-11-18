import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cls = this.props.color + ' square';
    return (
      <div className={ cls }>
      </div>
    );
  }
}

export default Square;

