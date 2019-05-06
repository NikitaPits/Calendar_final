import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DayOfWeak from './components/Header/DaysOfWeek';
import FlexLayout from "flexlayout-react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DayOfWeak />, div);
  ReactDOM.unmountComponentAtNode(div);
});
