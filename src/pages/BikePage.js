import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const BikePage = () => {
  const [bike, setBike] = useState({})
  const { id } = useParams();
  const getBikeDetail = async()=>{
    try {
      const response = await axiosInstance.get('/bikes/'+id);
      setBike(response.data);
    } catch (error) {
      alert('Error al cargar la bici')
    }
  }
  useEffect(()=>{
    getBikeDetail()
  },[])
  return (
    <>
      <h1 className="text-center">{bike.model}</h1>
      <img src={bike.img} alt="imagen de la bici" />
      <p> Precio: ${bike.price}</p>
    </> 
   );
}
 
export default BikePage;