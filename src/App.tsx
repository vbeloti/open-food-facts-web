import React, { useEffect, useState } from 'react';
import api from './services/api';
import Products from './types/products';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import {
  Container,
  ContainerFoods,
  ContainerCompare,
} from './styles/app';
import Modal from './components/Modal';
import CompareProduct from './components/CompareProduct';
import Product from './components/Product';
import Next from './components/Next';
import Loading from './components/Loading';

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [compareProducts, setCompareProducts] = useState<Products[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState<Products>();
  const [messageError, setMessageErro] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setMessageErro('');

    api
      .get<Products[]>(`products?page=${page}`)
      .then(response => setProducts(response.data))
      .catch(error => setMessageErro(error.response.data.message));
  }, [page]);

  const handleModal = (index: number) => {
    setProduct(products[index]);

    if (showModal) {
      setShowModal(false);
    } else setShowModal(true);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(() => page - 1);
    }
  };

  const handleNext = () => {
    if (page >= 1) {
      setPage(() => page + 1);
    }
  };

  const handleCompare = (product: Products) => {
    setCompareProducts(
      compareProducts.length === 0
        ? [{ ...product }]
        : [{ ...compareProducts[compareProducts.length - 1] }, { ...product }],
    );
  };

  const handleRemove = (product: Products) => {
    setCompareProducts(
      compareProducts.filter(
        compareProduct => compareProduct._id !== product._id,
      ),
    );
  };

  if(products.length === 0) return (<Loading />);

  return (
    <>
      <Header />
      <GlobalStyle />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
      <Container>
        <h2>Alimentos</h2>

        {compareProducts.length > 0 && (
          <ContainerCompare>
            <h3>Comparação</h3>
            {compareProducts.map((compareProduct, index) => (
              <CompareProduct
                index={index}
                handleRemove={handleRemove}
                compareProduct={compareProduct}
                key={compareProduct._id + index}
              />
            ))}
          </ContainerCompare>
        )}

        <ContainerFoods>
          {messageError ? (
            <h1>{messageError}</h1>
          ) : (
            products.map((product, index) => (
              <Product
                index={index}
                handleModal={handleModal}
                handleCompare={handleCompare}
                product={product}
                key={product._id}
              />
            ))
          )}
        </ContainerFoods>

        <Next
          page={page}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </Container>
    </>
  );
}

export default App;
