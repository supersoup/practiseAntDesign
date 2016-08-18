import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

const Wrap = ({ children }) => {
  return (
    <div>
      <div className="header">
        <h1>myAntDesign</h1>
      </div>
      <div>
        <div className="menu">
          <div><Link to="/list">list</Link></div>
          <div><Link to="/update">update</Link></div>
        </div>
        <div className="main">
          {children}
        </div>
      </div>
      <div className="footer">
        This is my first ant-design project.
      </div>
    </div>
  );
};

Wrap.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrap;
