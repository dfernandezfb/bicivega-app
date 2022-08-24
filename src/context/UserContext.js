import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

export const UserContext = createContext();
const UserProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (values)=>{
    try {
      const response = await axiosInstance.get('/users');
      const users = response.data
      const userFound = users.find(user => user.email === values.email );
      if(userFound){
        const isOk = userFound.password === values.password;
        if(isOk){
          const {password, ...userWithoutPass} = userFound
          setUser(userWithoutPass);
          navigate('/home')
        }else{
          alert('Contraseña erronea');
        }
      }else{
        alert('Usuario no encontrado');
      }
    } catch (error) {
      alert('error')
    }
  }

  return(
    <UserContext.Provider 
    value={{
      user,
      setUser,
      login
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

