import { Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../Components/ProductCard"
import { ProductInterface } from "../Products"



const HomeScreen = () => {
    const [products, setProducts] = useState<ProductInterface[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/products');
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <>
            <h1>
                Latest Products
            </h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen