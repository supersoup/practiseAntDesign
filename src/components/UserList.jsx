import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { DatePicker } from 'antd';

const UserList = ({ location }) => {
  return (
    <div>

      <div>
        <DatePicker />
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
};

UserList.propTypes = {

};

export default UserList;
