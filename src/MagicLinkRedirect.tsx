import { useParams } from "react-router-dom";
import { confirmSignIn } from "aws-amplify/auth";

function MagicLinkRedirect() {
  const { code } = useParams<"code">();

  const handleConfirmSignIn = async () => {
    if (code) {
      try {
        const authSession = await confirmSignIn({
          challengeResponse: code,
        });
        console.log('❤️❤️❤️', authSession);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      Code: {code}
      <br />
      <button onClick={
        handleConfirmSignIn
      }>Confirm SignIn</button>
    </>
  );
}

export default MagicLinkRedirect;
