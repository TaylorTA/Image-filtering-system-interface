import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import styles from './AuthPage.module.scss';

import { fetchTrail } from '../../store/effects';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const cachedUser = localStorage.getItem('kaleidoscopeUser');
    if (cachedUser) {
      props.fetchTrail(cachedUser);
    }
  };

  handleChange(type, e) {
    this.setState({
      [type]: e.target.value,
      errors: []
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.user) {
      this.props.fetchTrail(this.state.user);
    } else {
      this.setState({
        errors: ['cannot be empty']
      });
    }
  }

  render() {
    const cachedUser = localStorage.getItem('kaleidoscopeUser');
    const inputClasses = classnames(styles.formFieldInput, {
      [styles.formFieldInputError]: this.state.errors.length > 0
    });

    if (cachedUser) {
      return (
        <div className={styles.page}>
          <div className={styles.spinner}></div>
        </div>
      );
    } else {
      return (
        <div className={styles.page}>
          <form className={styles.form}
                onSubmit={this.handleSubmit}>
            <label className={styles.formField}>
              <div className={styles.formFieldLabel}>
                Enter your user id
              </div>
      
              <input  type="text" 
                      className={inputClasses}
                      value={this.state.user}
                      onChange={e => this.handleChange('user', e)}
                      disabled={this.props.isFetching}/>
              {this.state.errors.map((error, index) => 
                <div key={index} className={styles.formFieldError}>{error}</div>   
              )}
            </label>
      
            <button type="submit" 
                    className={styles.formButton}
                    disabled={this.props.isFetching}>
              {this.props.isFetching ? 'Logging in...' : 'Log in'}
            </button>
          </form>
        </div>
      );
    }
  }
}

export default connect(
  state =>  ({
    isFetching: state.trail.isFetching,
    cachedUser: state.trail.cachedUser
  }),
  dispatch => ({
    fetchTrail: (id) => dispatch(fetchTrail(id))
  })
)(AuthPage);