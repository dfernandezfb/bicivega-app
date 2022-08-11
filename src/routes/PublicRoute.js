import { Navigate } from "react-router-dom";

const PublicRoute = ({user,children}) => {
  return ( 
    user?
    <Navigate to='/home'/>
    :
    children
   );
}
 
export default PublicRoute;