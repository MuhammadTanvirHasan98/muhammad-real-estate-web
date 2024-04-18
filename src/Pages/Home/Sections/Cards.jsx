import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('estate.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-indigo-700 font-semibold lg:text-xl mb-4">
          Our Estates
        </p>
        <h1 className="lg:text-5xl text-indigo-500 md:text-3xl text-2xl font-bold mb-2">
          Properties for Sale & Rent
        </h1>
        <hr className="border-dashed border-indigo-700 w-1/2 mx-auto" />
      </div>

      {/* Cards */}
      <div className="grid lg:gap-8 gap-6  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
      {
        cards.map((card,idx)=><Card
         key={idx}
         card={card}
        ></Card>)
      }

     </div>
    </div>
  );
};

//  Cards.propTypes = {
//   card: PropTypes.object
// };

export default Cards;
