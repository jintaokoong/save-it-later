import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignInPage from 'pages/sign-in';
import MainPage from 'pages/main';
import Gatekeeper from 'components/authentication/gatekeeper';
import { AuthenticationContextProvider } from 'components/authentication/authentication';

function App() {
  return (
    <Fragment>
      <AuthenticationContextProvider>
        <Route exact path={'/'}>
          <Redirect to={'/main/article'} />
        </Route>
        <Route path={'/sign-in'} component={SignInPage} />
        <Gatekeeper>
          <Route path={'/main'} component={MainPage} />
        </Gatekeeper>
      </AuthenticationContextProvider>
    </Fragment>
  );
}

export default App;
