import { Fragment, PropsWithChildren, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth as fauth } from 'config/firebase';
import { AuthenticationContext } from 'components/authentication/authentication';

const Gatekeeper = (props: PropsWithChildren<any>) => {
  const auth = useContext(AuthenticationContext);
  const history = useHistory();

  useEffect(() => {
    const listener = fauth.onAuthStateChanged((usr) => {
      if (usr === null) {
        history.push('/sign-in');
      }
    });
    return () => {
      listener();
    };
  }, [history]);

  return auth === null ? null : <Fragment>{props.children}</Fragment>;
};

export default Gatekeeper;
