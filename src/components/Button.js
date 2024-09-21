import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.color || '#0055A5'};
  color: #fff;
  padding: 10px 20px;
  border: none;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  border-radius: 5px;
`;

export default Button;
