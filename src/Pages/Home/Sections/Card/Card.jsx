import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdSoupKitchen, MdLocationPin } from "react-icons/md";
import { SiFitbit } from "react-icons/si";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({card}) => {
  const{id,image,segment_name,short_des,services,status,area,price, location} = card;
  console.log(image)

  return (

    <div className="card rounded-none border-2  border-indigo-400 md:w-full shadow-xl">
      {/* Card image */}
      <div className={`w-full xl:min-h-[380px] lg:min-h-[250px] md:min-h-[300px] min-h-[300px] bg-[url('${image}')] object-cover bg-no-repeat bg-cover bg-center flex flex-col justify-between`}>
        <div className="flex justify-between">
          <p className="bg-indigo-100 text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 p-2 font-bold rounded-br-3xl">
            {status}
          </p>
          <p className="bg-indigo-100 text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 p-2 font-bold rounded-bl-3xl">
            {price}
          </p>
        </div>

        <div className="bg-indigo-100 text-indigo-600 p-3 font-bold flex justify-between text-sm hover:bg-indigo-600 hover:text-indigo-100">
          <div className="flex gap-4">
            <p className="flex items-center gap-1">
              <IoBedSharp />{services.bed}
            </p>
            <p className="flex items-center gap-1">
              <FaBath />{services.bath}
            </p>
            <p className="flex items-center gap-1">
              <MdSoupKitchen />{services.kitch}
            </p>
          </div>

          <p className="flex items-center gap-1">
            <SiFitbit />{area}
          </p>
        </div>
      </div>

      {/* Cards Info */}
      <div className="p-4 pt-1">
        <h2 className="lg:text-2xl text-xl font-bold play">
          {segment_name}
        </h2>
        <p className="flex items-center text-sm  text-indigo-600 font-semibold my-2">
          <MdLocationPin /> {location.address}
        </p>
        <p className="">
          {short_des}
        </p>

        <hr className="border-dashed border-indigo-600 w-[95%] mx-auto my-4" />

        <div className="flex justify-center">
          <Link to={`/estate/${id}`}>
        
          <button className="btn btn-outline  rounded-none text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 font-bold">
            View Property
          </button>
          </Link>
        </div>
      </div>
      {/* <div>
         <img src={image} alt="" />
      </div> */}
    </div>
  );
};

export default Card;

Card.propTypes ={
  card: PropTypes.object
}
