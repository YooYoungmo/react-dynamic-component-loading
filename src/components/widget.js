import React, { Component } from 'react';
import Loadable from 'react-loadable';


const Loading = () => <div>Loading...</div>;

const WidgetABC = Loadable({
        loader: () => import('./widgetABC'),
        loading: Loading,
});

const WidgetCDE = Loadable({
        loader: () => import('./widgetCDE'),
        loading: Loading,
});


class Widget extends Component {
  widgets = [
        WidgetABC,
        WidgetCDE,
  ];
  
  render() {
	const TagName = this.widgets[this.props.widgetId];
	return <TagName brand={this.props.brand} shop={this.props.shop} />
  }
}

export default Widget;

