import React from 'react';

import { NextContainer } from '../styles/app';

type NextProps = {
  page: number;
  handlePrevious: () => void;
  handleNext: () => void;
};

const Next = ({ page, handlePrevious, handleNext }: NextProps) => {
  return (
    <NextContainer>
      {page > 1 && (
        <button type="submit" onClick={handlePrevious}>
          Voltar
        </button>
      )}
      <button type="submit" onClick={handleNext}>
        Próximo
      </button>
    </NextContainer>
  );
};

export default Next;
