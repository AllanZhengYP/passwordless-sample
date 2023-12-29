
import { signIn } from 'aws-amplify/auth';
import { useRef } from 'react';
import './App.css'

function SignIn() {
  const usernameFieldRef = useRef<HTMLInputElement>(null);

  const handlePasswordlessLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = usernameFieldRef.current?.value;
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
            type="text"
            ref={usernameFieldRef}
            placeholder="Username"
            required
          />
          <br />
          <button type="submit">
            Sign In With Email and MAGIC_LINK
          </button>
        </form>
      </div>
    </>
  )
}

export default SignIn;
