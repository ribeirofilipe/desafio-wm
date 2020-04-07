import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: 100%;

  img {
    width: 300px;
    height: 80px;
    margin-bottom: 40px;

    @media screen and (max-width: 415px) {
      margin: auto;
    }

  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 415px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;

  @media screen and (max-width: 415px) {
      width: 100%;
      justify-content: center;
      margin: 20px 0 20px 20px;
  }
  
`;

export const Content = styled.div`
  display: flex;
  border-bottom: ${props => props.active ? '4px solid #8a2b31' : ''};
  cursor: pointer;

  @media screen and (max-width: 415px) {
      width: 50%;
  }
  
  aside {
    margin: 0 30px 0 30px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    @media screen and (max-width: 415px) {
      margin: 0 10px 20px 10px;
    }
  }

  background: #f4f4f4;
  width: 100%;

  div {
    margin-left: 10px;
    color: #8e8e9a;
  }

  span {
    font-size: 32px;
    color: #8e8e9a;

    @media screen and (max-width: 415px) {
      font-size: 22px;
    }
  }
`;

export const RightAside = styled.div`
  button {
    border: 2px solid #d8a15d;
    padding: 10px 40px;
    background: #f3f3f3;
    color: #d8a15d;
    font-weight: bold;

    @media screen and (max-width: 415px) {
      margin-bottom: 20px;
  }
  }
`;
