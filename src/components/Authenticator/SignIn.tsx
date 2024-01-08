
import { signIn } from 'aws-amplify/auth';
import { useRef, useState } from 'react';

function SignIn() {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const [showCheckEmailMessage, setShowCheckEmailMessage] = useState<boolean>(false);

  const handlePasswordlessLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = emailFieldRef.current?.value;
    if (!username) {
      return;
    }

    try {
      const authSession = await signIn({
        username,
        passwordless: {
          deliveryMedium: 'EMAIL',
          method: 'MAGIC_LINK'
        }
      });
      setShowCheckEmailMessage(true);
      console.log(authSession);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="card">
        <form onSubmit={handlePasswordlessLogin}>
          <label>Username:</label>
          <input
            type='email'
            ref={emailFieldRef}
            placeholder="email"
            required
          />
          <br />
          <button type="submit">
            Sign In With Email and MAGIC_LINK
          </button>
        </form>
        <div className="card" hidden = {!showCheckEmailMessage}>
          <p>Check your email for a link to sign in.</p>
        </div>
      </div>
    </>
  )
}

export default SignIn;
