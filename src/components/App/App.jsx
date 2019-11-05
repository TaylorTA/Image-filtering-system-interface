import React from 'react';
import { connect } from 'react-redux';

import styles from './App.module.scss';
import AuthPage from '../AuthPage/AuthPage';
import UserInfo from '../UserInfo/UserInfo';
import UserTrail from '../UserTrail/UserTrail';
import RelatedTrails from '../RelatedTrails/RelatedTrails';

const App = ({
  user
}) => {
  if (user) {
    return (
      <div className={styles.component}>
        <div className={styles.sidebar}>
          <UserInfo></UserInfo>
          <UserTrail></UserTrail>
        </div>

        <div className={styles.body}>
          <RelatedTrails></RelatedTrails>
        </div>
      </div>
    );
  } else {
    return (
      <AuthPage></AuthPage>
    );
  }
}

export default connect(
  state => ({
    user: state.trail.user
  })
)(App);
