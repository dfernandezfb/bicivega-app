import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomCard = ({title, description, img, buttonText,path}) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(path)
  }
  return ( 
    <Card className="bg-beige my-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className="btn-oxford" onClick={handleClick}>{buttonText}</Button>
      </Card.Body>
    </Card>
   );
}
 
export default CustomCard;