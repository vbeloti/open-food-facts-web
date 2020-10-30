import React, { Dispatch } from 'react';
import { Container, ModalContent } from '../styles/components/modal';
import Products from '../types/products';

type ModalProps = {
  showModal: boolean;
  product: Products | undefined;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ showModal, product, setShowModal }: ModalProps) => {
  if (!showModal) return null;

  return (
    <Container>
      <ModalContent>
        <button type="submit" onClick={() => setShowModal(false)}>X</button>
        <img
          src={product?.image_url.replace('.200', '.full')}
          alt={`Alimento ${product?.product_name}`}
        />
        <h2>{product?.product_name}</h2>
        <p>
          <span>BarCode: </span>
          {product?.barcode}
        </p>
        <p>
          <span>Status: </span>
          {product?.status}
        </p>
        <p>
          <span>Embalagem: </span>
          {product?.packaging}
        </p>
        <p>
          <span>Marcas: </span>
          {product?.brands}
        </p>
        <p>
          <span>Quantidade: </span>
          {product?.quantity}
        </p>
        <p>
          <span>Categorias: </span>
          {product?.categories}
        </p>
      </ModalContent>
    </Container>
  );
};

export default Modal;
