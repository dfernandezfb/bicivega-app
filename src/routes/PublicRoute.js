import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({children}) => {
  const {user} = useContext(UserContext);

  return ( 
    user?
    <Navigate to='/home'/>
    :
    children
   );
}
 
export default PublicRoute;