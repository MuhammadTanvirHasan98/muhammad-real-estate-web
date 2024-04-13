import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";


const Home = () => {
  const authInfo = UseAuthContext();
  console.log(authInfo);
  return (
    <div>
       <h1 className="text-3xl text-center">This is home page!</h1>
    </div>
  );
};

export default Home;