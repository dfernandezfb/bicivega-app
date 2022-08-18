import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard/CustomCard";
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
        bikes.map((bike,index)=><CustomCard
        key={index}
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