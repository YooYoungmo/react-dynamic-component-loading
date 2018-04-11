import React, { Component } from 'react';
import Widget from './components/widget'

const widgetIdList = [0, 1];  

class App extends Component {
  render() {
    return (
      <div className="App">
      {
      	widgetIdList.map((id, idx) => <Widget key={idx} widgetId={id} brand='EE' shop='CE' />)
      }
      </div>
    );
  }
}

export default App;
