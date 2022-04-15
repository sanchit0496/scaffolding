import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const FormBody = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 0 auto;
  margin-top: 5em;
  input {
    margin-bottom:15px;
    height: 40px;
    padding: 0 10px;
  }
  label {
    text-align: left;
    margin-bottom: 6px;
  }
  @media only screen and (max-width: 992px) {
    width: 80%
  }
`;


export const FormButton = styled.button`
  margin-top: 40px;
  max-width: 180px;
  height: 40px;
  border-radius: 25px;
  width: 100%;
  cursor:pointer;
  border: 1px solid black;
`;
 