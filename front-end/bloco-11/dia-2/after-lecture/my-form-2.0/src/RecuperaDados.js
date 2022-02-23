import React, { Component } from "react";

class RecuperaDados extends Component {
  render() {
    const { callback } = this.props;
    return callback();
  }
}

export default RecuperaDados;
