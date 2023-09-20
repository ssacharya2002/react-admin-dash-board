
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

// Fetch data and send to Single Component

const Product = () => {
  return <div className="product">
    
    <Single {...singleProduct}/>
  </div>;
};

export default Product;
