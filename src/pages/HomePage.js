import { useEffect, useState } from "react";
import BikeCard from "../components/BikeCard/BikeCard";
import axiosInstance from "../config/axiosInstance";

const HomePage = () => {
  const [bikes, setBikes] = useState([])
  const getBikes = async ()=>{
    try {
      const response = await axiosInstance.get('/bikes');
      setBikes(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getBikes()
  },[])
  return (
    <div className="container mt-5">
      {
        bikes.map(bike=><BikeCard
        title={bike.model} 
        description={`Precio: ${bike.price}`}
        buttonText='Ver detalle'
        img=''
        path={`/bike/${bike.id}`}
        />)
        }
    </div> 
   );
}
 
export default HomePage;