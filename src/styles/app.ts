import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1100px;
  margin: 1rem auto;

  h2 {
    padding: 1rem 0;
    background-color: white;
    text-align: center;
    color: #393e46;
    border-radius: 0.5rem;
  }
`;

export const ContainerFoods = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ProductContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 48%;

  div {
    display: flex;
    align-items: center;
  }

  img {
  cursor: pointer;
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 1rem;
  }

  button {
    cursor: pointer;
    margin: 0.5rem auto;
    padding: 0.5rem;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
  }

  h3 {
    cursor: pointer;
    text-align: center;
    color: #48466d;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;

      img {
      width: 100%;
      height: 300px;
    }

    h3 {
      margin-top: 1rem;
    }
  }
`;

export const NextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    border: 0;
    background-color: white;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    color: #48466d;
  }
`;

export const ContainerCompare = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    background-color: white;
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 0.5rem;
  }

  img {
    border-radius: 1rem;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  p {
    margin: 0.5rem 0;
  }

  button {
    border: 0;
    background-color: white;
    padding: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CompareProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
`;
