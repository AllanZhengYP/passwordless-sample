import { ReactNode } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Authenticator({ selected }: { selected: "SIGN_IN" | "SIGN_UP" }) {
  return (
    <>
      <div className="flex gap-1">
        <div className={`Tab ${selected === "SIGN_IN" ? "selected" : ""}`}>
          {selected === "SIGN_IN" ? <strong>Sign In</strong> : "Sign In"}
        </div>
        <div className={`Tab ${selected === "SIGN_UP" ? "selected" : ""}`}>
          {selected === "SIGN_IN" ? <strong>Sign In</strong> : "Sign In"}
        </div>
      </div>
      {selected === "SIGN_IN" && <SignIn />}
      {selected === "SIGN_UP" && <SignUp />}
    </>
  );
}

export default Authenticator;
