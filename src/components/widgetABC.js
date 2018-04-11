import React, { Component } from 'react';

class WidgetABC extends Component {
  render() {
    return (
        <div>
          This is WidgetABC 
		<p>brand is : {this.props.brand}</p>
		<p>shop is : {this.props.shop}</p>
        </div>
    );
  }
}

export default WidgetABC;
