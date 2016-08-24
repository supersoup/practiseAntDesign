import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { DatePicker, Row, Col } from 'antd';

import styles from './list.less';

const UserList = React.createClass({
  render() {
    return (
      <div>
        <div>
          <Row className={styles.row}>
            <Col span={8}>
              <Row type="flex" align="middle" gutter={16}>
                <Col span={6} className={styles['horizontal-right']}>
                  开始日期:
                </Col>
                <Col span={18}>
                  <DatePicker/>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row type="flex" align="middle" gutter={16}>
                <Col span={6} className={styles['horizontal-right']}>
                  进行日期:
                </Col>
                <Col span={18}>
                  <DatePicker showTime format='yyyy-MM-dd HH:mm:ss'/>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row type="flex" align="middle" gutter={16}>
                <Col span={6} className={styles['horizontal-right']}>
                  结束日期:
                </Col>
                <Col span={18}>
                  <DatePicker/>
                </Col>
              </Row>
            </Col>
          </Row>

        </div>

        <table>
          <tbody>
          <tr>
            <th>id</th>
            <th>名字</th>
          </tr>
          <tr>
            <td>01</td>
            <td>小明</td>
          </tr>
          <tr>
            <td>02</td>
            <td>小红</td>
          </tr>
          <tr>
            <td>03</td>
            <td>小亮</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
});

export default UserList;
