import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import Wrap from '../components/wrap';
import Routes from '../routes/index';

ReactDOM.render(
  <Wrap>
    <Routes history={browserHistory} />
  </Wrap>
  , document.getElementsByTagName('body')[0]);
