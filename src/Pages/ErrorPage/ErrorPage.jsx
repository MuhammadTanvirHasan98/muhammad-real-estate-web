import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center border-2 md:m-10 m-4 p-4 border-indigo-400">
      <h1 className="lg::text-9xl md:text-7xl text-5xl text-indigo-600 font-extrabold mb-2 play">
        Opps!
      </h1>

      <p className="text-red-600 text-xl font-semibold my-2">
        {error.status} - Page {error.statusText}
      </p>
      <p className="md:w-1/2 w- md:text-lg textarea-xs play mb-3npm">
        You are lost! The page you are looking for might have been removed or
        temporarily unavailable.
      </p>
      <Link>
        <button className="btn btn-primary btn-outline">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
