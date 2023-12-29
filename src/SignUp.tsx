import { useRef, useState } from 'react';
import { SignUpWithEmailAndMagicLinkInput, SignUpWithEmailAndOTPInput, signUp } from 'aws-amplify/auth';

function SignUp() {
  const usernameFieldRef = useRef<HTMLInputElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const [method, setMethod] = useState<'MAGIC_LINK'|'OTP'>('MAGIC_LINK');

  const handlePasswordlessSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = usernameFieldRef.current?.value;
    const email = emailFieldRef.current?.value;
    if (!username || !email) {
      return;
    }

    try {
      if (method === 'MAGIC_LINK') {
        await signUp({
          username,
          passwordless: {
            deliveryMedium: 'EMAIL',
            method: 'MAGIC_LINK'
          },
          options: {
            userAttributes: {
              email
            }
          }
        });
      } else {
        await signUp({
          username,
          passwordless: {
            deliveryMedium: 'EMAIL',
            method: 'OTP'
          },
          options: {
            userAttributes: {
              email
            }
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="card">
        <form onSubmit={handlePasswordlessSignUp}>
          <label>Username:</label>
          <input
            type="text"
            ref={usernameFieldRef}
            placeholder="Username"
            required
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            ref={emailFieldRef}
            placeholder="Email"
            required
          />
          <br />
          <label>Method:</label>
          <select value={method} onChange={(e) => setMethod(e.target.value as 'MAGIC_LINK' | 'OTP')}>
            <option value="MAGIC_LINK">Magic Link</option>
            <option value="OTP">OTP</option>
          </select>
          <br />
          <button type="submit">
            Sign Up With Email
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp;