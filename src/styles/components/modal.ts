import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  min-height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border-radius: 2rem;
  border: 1px solid #ccc;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  button {
    position: absolute;
    top: -20px;
    right: -20px;
    border: 0;
    border: 1px solid #ccc;
    background-color: white;
    color: #6c63ff;
    width: 50px;
    border-radius: 0.5rem;
    font-size: 2.3rem;
  }

  img {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  p {
    padding: 0.5rem 2rem;

    span {
      font-weight: bold;
    }
  }

  h2 {
    margin-left: 2rem;
    margin-top: 1rem;
  }

`;
