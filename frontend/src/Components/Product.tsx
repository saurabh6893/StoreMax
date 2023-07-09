import { Card } from "react-bootstrap";
import { Product } from "../Products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
