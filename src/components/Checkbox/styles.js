import styled from "styled-components";

export const Container = styled.div`
  label {
    color: #9e9e99;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media screen and (max-width: 415px) {
      font-size: 14px;
    }
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid #d8d8da;
    background: #FFF;

    @media screen and (max-width: 415px) {
      height: 15px;
      width: 15px;
    }
  }

  label input:checked ~ span {
    background-color: #FFF;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    left: 9px;
    top: 5px;
    
    width: 5px;
    height: 10px;
    border: solid red;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    @media screen and (max-width: 415px) {
      top: -1px;
      left: 3px;
    }
   
  }
`;
