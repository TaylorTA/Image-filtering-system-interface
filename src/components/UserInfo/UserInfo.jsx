import React from 'react';
import { connect } from 'react-redux';

import styles from './UserInfo.module.scss';
import { logOut } from '../../store/effects';

const UserInfo = ({
  user,
  logOut
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.userName}>
        {user}
      </div>

      <button type="button" 
              className={styles.logOutButton}
              onClick={logOut}>Log out</button>
    </div>
  );
}

export default connect(
  state => ({
    user: state.trail.user
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(UserInfo);