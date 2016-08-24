
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

import styles from './Wrap.less';


const Wrap =  React.createClass({
      render() {
        return (
          <div>
            <div className={styles.header}>
              <h1>myAntDesign</h1>
            </div>
            <div className={styles.content}>
              <div className={styles.menu}>
                <div><Link to="/list">list</Link></div>
                <div><Link to="/update">update</Link></div>
              </div>
              <div className={styles.main}>
                {this.props.children}
              </div>
            </div>
            <div className={styles.footer}>
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
