import { useNavigate, useParams } from "react-router-dom";
import { confirmSignIn } from "aws-amplify/auth";

function MagicLinkRedirect() {
  const { code } = useParams<"code">();
  const navigate = useNavigate();

  const handleConfirmSignIn = async () => {
    if (code) {
      try {
        const authSession = await confirmSignIn({
          challengeResponse: code,
        });
        console.log('❤️❤️❤️', authSession);
        navigate("/");
      } catch (error) {
        console.error(error);
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
