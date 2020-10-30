import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
  `;


export const Container = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  position: relative;

  &:empty {
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: relative;

  }
`;

export const BoxTitle = styled.div`
  position: relative;
  width: 100%;
  background-color: #ccc;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);

    animation: ${shimmer} 700ms infinite;
  }
`;

export const Title = styled.div`
  width: 200px;
  height: 30px;
  background-color: white;
  margin: 0 auto;
  border-radius: 1rem;
`;

export const BoxContent = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
  border-radius: 0.5rem;
  min-height: 500px;
`;


export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);

    animation: ${shimmer} 700ms infinite;
  }
`;

export const ContentItem = styled.div`
  background-color: #ccc;
  height: 270px;
  width: 48%;
  margin: 1rem 0;
  border-radius: 0.5rem;
`;

export const ContentImage = styled.div`
  background-color: white;
  height: 200px;
  width: 100%;
  max-width: 170px;
  margin: 1rem;
  border-radius: 0.5rem;
`;

export const ContentTitle = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  max-width: 250px;
  margin: 1rem;
  border-radius: 2rem;
`;
export const ContentImageTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentButton = styled.div`
  display: flex;
  width: 100%;
  height: 39px;
  border-radius: 0.2rem;
  background-color: white;;
`;
