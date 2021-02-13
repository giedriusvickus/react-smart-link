import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Example from '../../src';

export default class Demo extends Component {
  render() {
    return <div>
      <h1>react-smart-link Demo</h1>
      <Router history={createBrowserHistory()}>
        <Example to={`/internal/route`}>React router route</Example><br />
        <Example to={`https://google.com`}>External URL</Example><br />
        <Example type="button">Generic button</Example>
      </Router>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'));
