import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  input{
    box-shadow: 1px 1px 10px gray;
    border: none;
    outline: none;
    margin-top: 20px;

    padding: 10px 10px
  }

  button{
    background: #203040;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    

    margin-top: 25px;
  }
`;
