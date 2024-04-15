import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const BestPlace = () => {
  const [animationVisible, setAnimationVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      // If component is in view, set animationVisible to true
      setAnimationVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>

      <div className={`min-h-[200px] md:min-h-[300px] lg:min-h-[450px] bg-[url('https://i.ibb.co/bR4JCD5/dark-bg.png')] bg-no-repeat bg-cover object-fill bg-center flex justify-center items-center md:mt-10 mt-4 py-8 md:py-0 ${animationVisible ? 'animate__animated animate__fadeIn' : ''}`}>

        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-6 gap-4 p-2 ">

          {/* Left Section */}
          <div className="md:w-[60%] text-center md:text-left text-white ">
            <h1 className={`md:text-5xl text-3xl  font-bold ${animationVisible ? 'animate__animated animate__fadeInLeft animate__slower' : ''}`}>
              Find Best Place for Living
            </h1>
            <p className={`md:my-4 my-2 md:text-xl ${animationVisible ? 'animate__animated animate__backInUp animate__slow' : ''}`}>
              Whether you are looking to buy or rent a home, we really
              are the people for you to come to.
            </p>
          </div>

          {/* Right Section */}
          <div className={`md:w-[35%] lg:w-[28%] w-[70%] border-2  border-cyan-500 hover:border-orange-600  hover:text-black py-2 flex flex-col items-center justify-center text-white ${animationVisible ? 'animate__animated animate__backInRight' : ''}`}>
            <Link to="/contact">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-cyan-600 text-white font-bold rounded-none md:px-10 px-6  border-none hover:bg-orange-600 hover:text-black">
                Contact Us <FaTelegramPlane />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPlace;


//https://i.ibb.co/bR4JCD5/dark-bg.png

//https://i.ibb.co/0yxHpp9/contact-bg.png