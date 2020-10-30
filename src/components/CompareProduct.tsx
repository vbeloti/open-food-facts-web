import React from 'react';

import { CompareProductContainer } from '../styles/app';
import Products from '../types/products';

type CompareProductType = {
  compareProduct: Products;
  index: number;
  handleRemove: (product: Products) => void;

}

const CompareProduct = ({compareProduct, index, handleRemove}: CompareProductType) => {
  return (
    <CompareProductContainer key={compareProduct._id + index}>
      <img src={compareProduct.image_url.replace('.200', '.full')} alt="" />
      <div>
        <p>
          <span>Nome: </span>
          {compareProduct?.product_name}
        </p>
        <p>
          <span>Quantidade: </span>
          {compareProduct?.quantity}
        </p>
        <p>
          <span>Marcas: </span>
          {compareProduct?.brands}
        </p>
        <p>
          <span>BarCode: </span>
          {compareProduct?.barcode}
        </p>
      </div>
      <button type="submit" onClick={() => handleRemove(compareProduct)}>
        Remover
      </button>
    </CompareProductContainer>
  );
};

export default CompareProduct;
