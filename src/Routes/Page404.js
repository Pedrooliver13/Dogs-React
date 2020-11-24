import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  max-width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Page404 = () => {
  return (
    <TitleWrapper>
      <Title>Error 404 - Página não encontrada.</Title>
    </TitleWrapper>
  );
};

export default Page404;
