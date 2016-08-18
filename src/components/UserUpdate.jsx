import React, { Component, PropTypes } from 'react';

const UserUpdate = ({ location }) => {
  return (
    <div>
      <table>
        <tr>
          <th className="label">id</th>
          <td className="value">01</td>
          <td className="tips"></td>
        </tr>
        <tr>
          <th className="label">名字</th>
          <td className="value">小明</td>
          <td className="tips"></td>
        </tr>
      </table>
    </div>
  );
};

UserUpdate.propTypes = {

};

export default UserUpdate;
