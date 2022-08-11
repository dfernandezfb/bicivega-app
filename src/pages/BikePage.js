import { useParams } from "react-router-dom";

const BikePage = () => {
  const { id } = useParams()
  return ( 
    <h1>bike page {id}</h1>
   );
}
 
export default BikePage;