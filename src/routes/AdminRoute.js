import { Navigate } from "react-router-dom";

const AdminRoute = ({user,children}) => {
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