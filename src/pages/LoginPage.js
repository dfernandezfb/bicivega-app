import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = ({user,setUser}) => {
  return ( 
    <>
      <h1 className="my-5">Ingresa al mundo de las bicis de la mano del más experimentado</h1>
      <LoginForm user={user} setUser={setUser}/>
    </>
    );
}
 
export default LoginPage;