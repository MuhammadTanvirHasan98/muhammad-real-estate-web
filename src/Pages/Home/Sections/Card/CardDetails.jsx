import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdSoupKitchen } from "react-icons/md";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

const CardDetails = () => {
  const data = useLoaderData();
  const { estateId } = useParams();
  const cardId = parseInt(estateId);
  const cardInfo = data.find((item) => item.id == cardId);
  console.log(cardInfo);


    // useEffect(()=>{
    //   AOS.init();
    // },[])

  const {
    id,
    image,
    description,
    facilities,
    price,
    status,
    services,
    location,
    estate_title,
    area,
  } = cardInfo;

  return (
    <div className="mt-10 border-2 border-indigo-600 md:p-10 p-4">
      <Helmet>
         <title>
          {`Muhammad Real Estate | ${id}`} 
         </title>
       </Helmet>
      {/* Card Header */}
      <div className="font-semibold flex flex-col md:flex-row justify-between border-2 mb-2 p-2 border-indigo-300 text-center md:text-left">
        <p>
          Status:{" "}
          <span className="text-indigo-500 play font-bold">{status}</span>{" "}
        </p>
        <p>
          Area: <span className="text-indigo-500 play font-bold">{area}</span>{" "}
        </p>
        <p>
          Estate Title:{" "}
          <span className="text-indigo-500 play font-bold">{estate_title}</span>{" "}
        </p>
      </div>

      {/* Card Middle */}
      <div className="">
        <div className="flex justify-between gap-4 font-semibold flex-col md:flex-row">
          {/* Card img */}
          <div data-aos="fade-right" className="md:w-2/3 ]">
            <img src={image} alt="" />
          </div>

          {/* Cards Side Info */}
          <div className="md:w-1/3 border-2 border-indigo-400 p-4 space-y-2 text-center md:text-left">
            <h1 className="font-semibold">Estate id: <span className="font-bold text-indigo-500">0{id}</span> </h1>
            <p className="font-semibold">
              Price:{" "}
              <span className="play text-indigo-500 font-extrabold">
                {price}
              </span>{" "}
            </p>
            <div>
              <p>Facilities:</p>
              <ul className="text-indigo-500 play">
                <li>1. {facilities[0]}</li>
                <li>2. {facilities[1]}</li>
                <li>3. {facilities[2]}</li>
              </ul>
            </div>

            <div>
              <p className="text-center">Location:</p>
              <p>
                Address:{" "}
                <span className="play text-indigo-500">{location.address}</span>{" "}
              </p>
              <p>
                Thana:{" "}
                <span className="play text-indigo-500">{location.thana}</span>{" "}
              </p>
              <p>
                Postal Code:{" "}
                <span className="play text-indigo-500">
                  {location.postal_code}
                </span>{" "}
              </p>
              <p>
                City:{" "}
                <span className="play text-indigo-500">{location.city}</span>{" "}
              </p>
            </div>
          </div>
        </div>


        {/* Services info */}
        <div className="font-semibold text-indigo-500 md:w-[65%] mt-2 text-center md:text-left border-2 mx-auto border-indigo-400 p-2">
           <p className="underline text-center">Premium Services</p>

           <div className=" flex md:flex-row flex-col md:gap-4 md:justify-between items-center">
            <p className="flex items-center gap-1">Bed:
              <IoBedSharp />{services.bed}
            </p>
            <p className="flex items-center gap-1">
              Washroom: <FaBath /> {services.bath}
            </p>
            <p className="flex items-center gap-1">
              Kitchen:
              <MdSoupKitchen />{services.kitch}
            </p>
          
        </div>

        </div>
        


      </div>

      {/* Card Middle Ends here */}

      {/* Card Footer */}
      <div>
        <p className="mt-4">
          {" "}
          <span className="text-indigo-600 font-semibold play">
            Descroption:{" "}
          </span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
