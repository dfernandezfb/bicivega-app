import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AdminRoute = ({children}) => {
  const {user} = useContext(UserContext);
  return ( 
    user?
      user.role ==='ADMIN'?
        children
        : <Navigate to='/home'/>
      :
      <Navigate to='/login'/>
   );
}
 
export default AdminRoute;