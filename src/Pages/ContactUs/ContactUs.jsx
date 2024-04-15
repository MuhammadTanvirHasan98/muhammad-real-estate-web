import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    document.getElementById('my_modal').showModal()
  };

  return (
    <div className="text-center text-3xl">
      <div className="lg:min-h-[300px] md:min-h-[250px]  min-h-[150px]  bg-[url('https://i.ibb.co/0yxHpp9/contact-bg.png')] bg-no-repeat bg-cover object-fill bg-center flex justify-center items-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-sky-600 bg-gray-300 md:p-4 p-2 font-bold">
          Contact Us Here
        </h1>
      </div>

      <div className="mt-20 space-y-4">
        <p className="md:text-[25px] text-sm font-semibold text-sky-600">
          Get it Touch
        </p>
        <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold">
          Contact Form
        </h1>
      </div>
      <hr className="border-sky-600 border-dashed md:w-1/4 w-1/3 mx-auto mt-2" />

      <div className="my-10">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row  gap-3 justify-between mb-4 ">
            <div className="w-full md:w-1/2 space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered input-info w-full md:text-xl rounded-none text-sky-600"
              />

              <input
                type="text"
                placeholder="Enter Subject"
                className="input input-bordered input-info w-full md:text-xl rounded-none text-sky-600"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="input input-bordered input-info w-full md:text-xl rounded-none text-sky-600"
              />

              <input
                type="number"
                placeholder="Enter Your Number"
                className="input input-bordered input-info w-full md:text-xl rounded-none text-sky-600"
              />
            </div>
          </div>
          <textarea
            cols="20"
            rows="30"
            placeholder="Enter text messages"
            className="input input-bordered input-info w-full pt-4 h-[200px] md:text-xl rounded-none text-sky-600"
          ></textarea>

          <button
            type="submit"
            className="btn btn-outline btn-info rounded-none mt-10 px-10 font-bold text-xl hover:text-white"
          >
            Send Now <FaTelegramPlane />
          </button>
        </form>

        {/* Modal */}
        <dialog id="my_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-3xl text-green-600">Your Text is sent successfully!</h3>
            <p className="py-4 text-[25px] text-blue-600">Thanks for being with us.</p>
            <div className="modal-action flex justify-center ">
              <form method="dialog">
                <button className="btn btn-outline btn-error">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ContactUs;
