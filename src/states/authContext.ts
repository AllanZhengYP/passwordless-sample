import { createContext } from "react";
import { signOut } from "aws-amplify/auth";
import { AuthSession } from "../types";

export const AuthContext = createContext<{
  session: AuthSession | null;
  logout: typeof signOut;
  setSession: (session: AuthSession|null) => void;
}>({
  session: null,
  setSession: () => {},
  logout: signOut,
});
