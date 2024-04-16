import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Slider = () => {
  return (
    <div className="z-0">

      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[700px] md:min-h-[500px] min-h-[350px] bg-[url('https://i.ibb.co/QKQZbLt/appartments.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center md:mt-10 mt-4 py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white">
                    <h3 className="md:text-2xl text-xl font-semibold animate__animated animate__fadeInTopLeft  animate__slow">
                      Luxury Houses
                    </h3>
                    <h1 className="md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slow">
                      Luxury <br /> Residence Here
                    </h1>
                    <p className="md:my-4 my-2 md:text-xl animate__animated animate__rotateInUpRight animate__slow md:w-full md:mx-0 w-[90%] mx-auto">
                      Whether you are looking to buy or rent a home, we really
                      are the people for you to come to.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-primary text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Read More
                    </button>
                  </div>

                  {/* Slider right Section */}
                  <div className="md:w-1/3 w-full border-2  border-cyan-500 hover:border-orange-600 hover:bg-sky-500 hover:text-black py-2 flex flex-col items-center justify-center text-white animate__animated animate__backInRight  animate__delay-2s">
                    <h1 className="font-semibold md:text-xl">Sale Price</h1>
                    <p className="font-bold md:text-3xl text-xl">$2,20,110/-</p>
                    <button className="btn btn-sm md:btn-md bg-cyan-600 text-white font-bold rounded-none md:px-10 px-6 md:mt-6 mt-2 border-none hover:bg-orange-600 hover:text-black">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[700px] md:min-h-[500px] min-h-[350px] bg-[url('https://i.ibb.co/Jmx6bdG/single-house.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center md:mt-10 mt-4 py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white">
                    <h3 className="md:text-2xl text-xl font-semibold animate__animated animate__fadeInTopLeft  animate__slow">
                      Luxury Houses
                    </h3>
                    <h1 className="md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slow">
                      Luxury <br /> Residence Here
                    </h1>
                    <p className="md:my-4 my-2 md:text-xl animate__animated animate__rotateInUpRight animate__slow md:w-full md:mx-0 w-[90%] mx-auto">
                      Whether you are looking to buy or rent a home, we really
                      are the people for you to come to.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-secondary text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Read More
                    </button>
                  </div>

                  {/* Slider right Section */}
                  <div className="md:w-1/3 w-full border-2  border-cyan-500 hover:border-orange-600 hover:bg-sky-500 hover:text-black py-2 flex flex-col items-center justify-center text-white animate__animated animate__backInRight  animate__delay-2s">
                    <h1 className="font-semibold md:text-xl">Sale Price</h1>
                    <p className="font-bold md:text-3xl text-xl">$2,20,110/-</p>
                    <button className="btn btn-sm md:btn-md bg-cyan-600 text-white font-bold rounded-none md:px-10 px-6 md:mt-6 mt-2 border-none hover:bg-orange-600 hover:text-black">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[700px] md:min-h-[500px] min-h-[350px] bg-[url('https://i.ibb.co/nn42GH0/luxury-house.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center md:mt-10 mt-4 py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white">
                    <h3 className="md:text-2xl text-xl font-semibold animate__animated animate__fadeInTopLeft  animate__slow">
                      Luxury Houses
                    </h3>
                    <h1 className="md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slow">
                      Luxury <br /> Residence Here
                    </h1>
                    <p className="md:my-4 my-2 md:text-xl animate__animated animate__rotateInUpRight animate__slow md:w-full md:mx-0 w-[90%] mx-auto">
                      Whether you are looking to buy or rent a home, we really
                      are the people for you to come to.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-info text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Read More
                    </button>
                  </div>

                  {/* Slider right Section */}
                  <div className="md:w-1/3 w-full border-2  border-cyan-500 hover:border-orange-600 hover:bg-sky-500 hover:text-black py-2 flex flex-col items-center justify-center text-white animate__animated animate__backInRight  animate__delay-2s">
                    <h1 className="font-semibold md:text-xl">Sale Price</h1>
                    <p className="font-bold md:text-3xl text-xl">$2,20,110/-</p>
                    <button className="btn btn-sm md:btn-md bg-cyan-600 text-white font-bold rounded-none md:px-10 px-6 md:mt-6 mt-2 border-none hover:bg-orange-600 hover:text-black">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;