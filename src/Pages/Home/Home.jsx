import BestPlace from "./Sections/BestPlace";
import Cards from "./Sections/Cards";
import Slider from "./Sections/Slider";

const Home = () => {

  return (
    <div className="space-y-16 md:space-y-32 lg:space-y-60">
       <Slider/>
        <Cards/>
       <BestPlace/>
    </div>
  );
};

export default Home;
