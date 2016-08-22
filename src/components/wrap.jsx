
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

require('./Wrap.less');


const Wrap =  React.createClass({
      render() {
        return (
          <div>
            <div className="header">
              <h1>myAntDesign</h1>
            </div>
            <div className="content">
              <div className="menu">
                <div><Link to="/list">list</Link></div>
                <div><Link to="/update">update</Link></div>
              </div>
              <div className="main">
                {this.props.children}
              </div>
            </div>
            <div className="footer">
              This is my first ant-design project.
            </div>
          </div>
        );
      }
    }
  );



Wrap.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrap;
