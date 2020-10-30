import React from 'react';

import { ProductContainer } from '../styles/app';
import Products from '../types/products';

type ProductProps = {
  index: number;
  product: Products;
  handleModal: (index: number) => void;
  handleCompare: (product: Products) => void;
};

const Product = ({
  index,
  product,
  handleModal,
  handleCompare,
}: ProductProps) => {
  return (
    <ProductContainer key={product._id}>
      <div>
        <img
          src={product.image_url}
          alt={product.product_name}
          onClick={() => handleModal(index)}
        />
        <h3 onClick={() => handleModal(index)}>{product.product_name}</h3>
      </div>
      <button type="submit" onClick={() => handleCompare(product)}>
        Comparar
      </button>
    </ProductContainer>
  );
};

export default Product;
