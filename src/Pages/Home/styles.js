import styled from 'styled-components';

export const ContainerHome = styled.div``;


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

export const Card = styled.div`
  margin-top: 30px;
  padding: 20px 0px;
  margin-bottom: 20px;

  h2{
    text-align: center;
    font-weight: bold;

    font-size: 26px;
  }

  p{
    text-align: center;
    font-size: 18px;
  }

  img{
    width: 100%;
    height: 150px;
  }

  button{
    background: #203040;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    
    &.remove{
      background: #CB4335;
    }
  
  }
  
  a{
    background: #203040;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    
    text-decoration: none;

    &.remove{
      background: #CB4335;
    }
  
  }

  box-shadow: 1px 1px 30px gray;
  border-radius: 5px;

  .buttonsContainer{
    display: flex;
    justify-content: space-around;
  }

`;
