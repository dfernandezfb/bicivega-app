import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const MyImg = styled.img`
max-height:70vh;
object-fit: cover;
object-position:center;
`

const CustomCarousel = ({images}) => {
  return ( 
    <Carousel>
      {
        images.map((image,index)=>
          <Carousel.Item key={index}>
          <MyImg
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
        </Carousel.Item>
      )
    }
    </Carousel>
   );
}
 
export default CustomCarousel;