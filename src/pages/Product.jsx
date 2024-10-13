import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrums from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/Productdisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // Convert productId from string to number for matching
  const product = all_product.find((e) => e.id === Number(productId));

  // Handle the case where the product isn't found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums
        product={product}
        name={product.name}
        category={product.category}
      />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
