import React, { Fragment, useEffect } from 'react';
import { auth } from 'config/firebase';
import { Route, useHistory } from 'react-router-dom';
import SignInPage from 'pages/sign-in';
import MainPage from 'pages/main';

function App() {
  const history = useHistory();
  useEffect(() => {
    const listener = auth.onAuthStateChanged((usr) => {
      if (usr == null) {
        history.push('/sign-in');
      } else {
        history.push('/main');
      }
    });
    return () => {
      listener();
    };
  }, [history]);

  return (
    <Fragment>
      <Route path={'/sign-in'} component={SignInPage} />
      <Route path={'/main'} component={MainPage} />
    </Fragment>
  );
}

export default App;
