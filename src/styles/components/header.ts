import styled from 'styled-components';

export const CenterContainer = styled.div`
  max-width: 1100px;
  padding: 1rem;
  background-color: white;
  margin: 0 auto;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  h1 {
    margin-left: 1rem;
    color: #6c63ff;
    text-align: center;
  }

  span {
    color: #eb6475;
    font-size: 2.5rem;
  }
`;

export const Background = styled.div`
  img {
  max-width: 100%;
  max-height: 200px;
  }
`;
