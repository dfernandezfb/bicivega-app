import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import Header from "../components/Header/Header";
import nahuelEnBici from './../assets/img/nahuel.avif'

const LandingPage = () => {
  return ( 
    <>
      <CustomCarousel 
      images={[
        {
          src:'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80',
          alt:'Tipo en bicicleta'
        },
        {
          src:nahuelEnBici,
          alt:'Nahuel en bici'
        }
      ]}
      />
    </>
   );
}
 
export default LandingPage;