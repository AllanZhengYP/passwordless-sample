import React, { useState, useEffect, useContext } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

import { AuthContext } from "../states/authContext";
import { AuthSession } from "../types";
import { useNavigate } from "react-router-dom";

function AuthProvider({
  children
}: {children: React.ReactNode}) {
  const { logout } = useContext(AuthContext);
  const [authSession, setAuthSession] = useState<AuthSession|null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuthSession()
      .then((authSession) => {
        if (authSession.tokens) {
          setAuthSession(authSession);
        }
      })
      .catch((e) => {
        console.log(e);
        navigate("/sign-in");
      });
  });

  const logoutAndClearSession = async () => {
    await logout();
    setAuthSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        session: authSession,
        setSession: setAuthSession, 
        logout: logoutAndClearSession,
      }}
    >
      <h1>Passwordless Auth Sample App</h1>
      {children}
      { authSession && <button onClick={logoutAndClearSession}>Sign Out</button> }
    </AuthContext.Provider>
  );
}

export default AuthProvider;