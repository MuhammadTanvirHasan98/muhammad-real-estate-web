import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    
   const data = useLoaderData();
   const {id} = useParams();
   const cardId = parseInt(id);
   const cardInfo = data.find((item)=>item.id == cardId)
   console.log(cardInfo)
  
  //  const {id, image, }= cardInfo;
   

  return (
    <div>
       
    </div>
  );
};

export default CardDetails;