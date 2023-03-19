import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  padding: 0px 16px;
`;
const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  background-color: #dddddd;
  font-size: 14px;
  color: #515151;
  text-decoration: none;

  border-radius: 5px;
  border: 1px solid #bbbbbb;

  &:hover,
  :focus {
    color: #dddddd;
    background-color: orangered;
  }
`;

export { ButtonContainer, ButtonLink };
