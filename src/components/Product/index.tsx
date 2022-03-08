import { Button, Card } from "react-bootstrap";

interface ProductProps {
    id: number,
    stock: number,
    title: string,
    isSales: boolean,
    price: number,
    salePrice: number,
    imageUrl: string,
    description?: string,

}


export function Product({id, stock, title, isSales, price, salePrice, imageUrl, description} : ProductProps) {
    return(
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={imageUrl} style={{ width: '12rem',
    padding: '1rem', 
    marginRight: 'auto',
    marginLeft: 'auto',}}/>
    <Card.Body>
      <Card.Title style={{ fontSize: '1.125rem'}}>{title}</Card.Title>
      <Card.Text style={{ fontSize: '1.25rem'}}>
        {salePrice}
      </Card.Text>
      <Card.Text style={{ fontSize: '1.25rem'}}>
        {price}
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>)
}