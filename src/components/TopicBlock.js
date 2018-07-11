import React from 'react';


class topicBlock extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const Header = () => (
  <topicblock>

  </topicblock>
);

export default Header;