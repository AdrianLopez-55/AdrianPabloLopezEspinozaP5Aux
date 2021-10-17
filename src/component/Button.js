import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <button className="btn btn-outline-success btn-lg" onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}