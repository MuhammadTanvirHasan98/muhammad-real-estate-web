import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import 'animate.css';


const Home = () => {


  const authInfo = UseAuthContext();
  console.log(authInfo);
  return (
    <div>
       <h1 className="animate__animated animate__bounceInRight animate__slow   text-3xl text-center">This is home page!</h1>
    </div>
  );
};

export default Home;