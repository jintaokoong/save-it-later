import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { auth } from 'config/firebase';
import { User } from 'firebase/auth';

export const AuthenticationContext = createContext<User | null>(null);

export const AuthenticationContextProvider = (
  props: PropsWithChildren<any>
) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        localStorage.setItem('authUser', JSON.stringify(user));
        setAuthUser(user);
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      }
    });
    return () => {
      listener();
    };
  });

  return (
    <AuthenticationContext.Provider value={authUser}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
