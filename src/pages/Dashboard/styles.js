import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 80px auto;
   max-width: 1020px;
`;

export const Content = styled.div`
  @media screen and (max-width: 415px) {
    width: 100%;
    max-height: 100%;
  }

  max-height: 312px;
  
  height: 100%;
  width: 100%;
  background: #FFF;

  border-radius: 4px;

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 933px;
    margin: auto;

    @media screen and (max-width: 415px) {
      width: 100%;
    }

    button {
      align-self: flex-end;
      width: 30%;
      padding: 12px 30px;
      background: #c83431;
      border: 0;
      border-radius: 4px;
      color: #FFF;
      font-weight: bold;
      font-size: 17px;
      transition: background 0.3s;

      @media screen and (max-width: 415px) {
        width: 100%;
      }

      :hover {
        padding: 11px 30px;
        font-size: 19px;
        background: ${darken(0.1, '#c83431')};
      }

      :active {
        @media screen and (max-width: 415px) {
          padding: 11px;
        }

        padding: 10px;
      }
    }
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 415px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  padding: 0 20px 20px 20px;

  @media screen and (max-width: 415px) {
    padding: 0 20px 0 20px;
  }
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    border-radius: 4px;

    border: 1px solid #b0b2b1;
    padding: 0 10px;

    @media screen and (max-width: 415px) {
      width: 100% !important;
      margin-bottom: 20px;
      margin-left: 0 !important;
    }

    label {
      font-size: 14px;
      color: #b0b2b1;

      @media screen and (max-width: 415px) {
        font-size: 12px;
      }
    }
  }
`;

  export const Options = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `;

export const CleanButton = styled.span`
  margin-left: auto;
  margin-right: 20px;
  margin-top: 8px;
  border: 0 !important;
  font-size: 20px;
  color: #93989b;
  
  cursor: pointer;
  transition: color 0.4s;

  @media screen and (max-width: 415px) {
    font-size: 15px;
    margin-top: 0 !important;
  }

  :hover {
    color: ${darken(0.3, '#93989b')};
  }
`;

export const AdvancedSearch = styled.span`
  border: 0 !important;
  color: #8f3b45;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.4s;
  padding: 0 !important;

  @media screen and (max-width: 415px) {
    font-size: 14px;
  }

  :hover {
    color: ${darken(0.1, '#8f3b45')};
  }
`;