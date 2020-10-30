import React from 'react';
import {
  Container,
  Title,
  BoxTitle,
  BoxContent,
  Content,
  ContentItem,
  ContentImage,
  ContentTitle,
  ContentImageTitle,
  ContentButton
} from '../styles/components/loading';
import Header from './Header';
import GlobalStyle from '../styles/global';

const Loading = () => {
  return (
    <>
    <Header />
    <GlobalStyle />
    <Container>
      <BoxTitle>
        <Title />
      </BoxTitle>

      <BoxContent>
        <Content>
          <ContentItem>
            <ContentImageTitle>
              <ContentImage />
              <ContentTitle />
            </ContentImageTitle>
            <ContentButton />
          </ContentItem>
          <ContentItem>
            <ContentImageTitle>
              <ContentImage />
              <ContentTitle />
            </ContentImageTitle>
            <ContentButton />
          </ContentItem>
          <ContentItem>
            <ContentImageTitle>
              <ContentImage />
              <ContentTitle />
            </ContentImageTitle>
            <ContentButton />
          </ContentItem>
          <ContentItem>
            <ContentImageTitle>
              <ContentImage />
              <ContentTitle />
            </ContentImageTitle>
            <ContentButton />
          </ContentItem>
        </Content>
      </BoxContent>
    </Container>
    </>
  );
};

export default Loading;
