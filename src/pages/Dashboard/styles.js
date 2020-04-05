import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 60%;
  width: 80%;
  background: #FFF;

  margin: 80px auto;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      align-self: flex-end;
      padding: 15px 50px;
      background: #c83431;
      border: 0;
      border-radius: 4px;
      color: #FFF;
      font-weight: bold;
      font-size: 22px;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
`;