import { HiHomeModern } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="">
      <footer className="lg:p-16 md:p-10 p-6 bg-indigo-200 text-base-content mt-20 ">
        <div className="w-[90%] mx-auto ">
          <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-4 mb-10">
            <div className="md:w-1/2 w-full">
              <h1 className="md:text-3xl text-2xl font-bold mb-2 text-center md:text-left text-indigo-600">
                Get in Touch
              </h1>
              <p className="text-center md:text-left text-gray-600">
                <span className="text-indigo-600 font-bold play">Muhammad Real Estate</span>{" "}
                brings wide range of choice, steadily updated property list and
                market trend for you to figure out your right decision.
              </p>
              <p className="text-gray-600 my-2 text-center md:text-left">
                Contact:{" "}
                <span className="text-indigo-500 ">+8801750996919</span>{" "}
              </p>
            </div>

            <div className="space-y-6 ">
              <form>
                <h6 className="md:text-2xl font-semibold text-xl text-center md:text-left text-indigo-600">
                  Newsletter
                </h6>
                
                  <label className="label">
                    <span className="label-text ">
                      Enter your email address
                    </span>
                  </label>

                   <div className="flex">
                   <input
                      type="text"
                      placeholder="Enter your email"
                      className="input input-bordered input-info rounded-none md:w-full w-[180px] md:h-[48px] h-[34px]"
                    />
                    <button className="btn md:btn-md btn-sm btn-primary rounded-none my-auto">
                      Subscribe
                    </button>
                   </div>

              </form>
            </div>
          </div>
          <hr className="border-indigo-600 border-dashed w-[80%] mx-auto my-4" />
          <div>
            <nav className="w-2/3 mx-auto flex flex-col items-center md:flex-row justify-between gap-2 text-indigo-500">
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
          <hr className="border-indigo-600 border-dashed w-[80%] mx-auto my-4" />

          <div className="flex flex-col items-center gap-2 md:flex-row justify-between">
            <p className="text-gray-600">
              All rights reserved@
              <span className="font-bold text-indigo-500">2024</span>{" "}
            </p>
            <p className="font-semibold text-indigo-700 flex items-center play">
              <HiHomeModern /> Muhammad Real State
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
