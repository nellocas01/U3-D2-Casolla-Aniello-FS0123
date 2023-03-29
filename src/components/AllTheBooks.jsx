import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import books from '../data/fantasy.json';


class AllTheBooks extends Component {
    render(){
  return (
    <>
    <Card>
        <Card.Body>
              {books.map((dish, index) => (
          <Card.Text>
                    <Card.Img variant="bottom" src={dish.img} alt="First slide" width={5} />
            
                <h3>{dish.title}</h3>
                <p>
                      <Badge bg="dark">{dish.price}€</Badge>
                    </p>
                    
          </Card.Text>
              
              ))};
              </Card.Body>
          </Card>
          </>
  );
              }
}
export default AllTheBooks 
