import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
           name: result.user?.displayName,
           email:result.user?.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
