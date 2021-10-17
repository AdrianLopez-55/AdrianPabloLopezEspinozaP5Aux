import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

export default class Keyboard extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="container">
          <div className="row" >
              <div className="col">
              <Button name="AC" clickHandler={this.handleClick} />
              </div>
              <div className="col">
              <Button name="/" clickHandler={this.handleClick}  />
              </div>
              <div className="col">
              <Button name="*" clickHandler={this.handleClick}  />
              </div>
              <div className="col">
              <Button name="-" clickHandler={this.handleClick}  />
              </div>
          </div>

        <div className="row">
            <div className="col">
            <Button name="7" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="8" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="9" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="+" clickHandler={this.handleClick}  />
            </div>
        </div>
        <div className="row">
            <div className="col" >
            <Button name="4" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="5" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="6" clickHandler={this.handleClick} />
            </div>
            <div className="col"></div>
            
        </div>
        <div className="row">
            <div className="col">
            <Button name="1" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="2" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="3" clickHandler={this.handleClick} />
            </div>
            <div className="col">
            <Button name="=" clickHandler={this.handleClick}  />
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Button  name="0" clickHandler={this.handleClick}  />
            </div>
            <div className="col"></div>
            <div className="col">
            <Button name="." clickHandler={this.handleClick} />
            </div>
            <div className="col">
            
            </div>
        </div>
      </div>
    );
  }
}