import { getCurrentUser } from "aws-amplify/auth";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./states/authContext";

function AuthenticatedApp() {
  const { session } = useContext(AuthContext);
  const [user, setUser] = useState<string>("");
  
  useEffect(() => {
    const loadUserName = async () => {
      try {
        const { username } = await getCurrentUser();
        setUser(username);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserName();
  });

  return (
    <>
      {session ? (
        <>
          <div className="card">
            <h1>Authenticated App</h1>
            <p>Hello! {user}</p>
          </div>
        </>
      ): <Navigate to="/sign-in" />}
    </>
  );
}

export default AuthenticatedApp;
