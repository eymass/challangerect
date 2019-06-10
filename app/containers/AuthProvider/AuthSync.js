import React from 'react';

export const syncAuth = data => {
  localStorage.setItem('loginEvent', JSON.stringify(data));
  localStorage.removeItem('loginEvent');
};

class AuthSync extends React.Component {
  componentWillMount() {
    // Listen to logout/login events from other tabs
    window.addEventListener('storage', this.authEvent);
  }

  /*  authEvent = e => {
    if (e.key === 'loginEvent') {
    }
  }; */

  render() {
    return null;
  }
}

export default AuthSync;
