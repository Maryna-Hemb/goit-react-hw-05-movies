import styled from 'styled-components';

const List = styled.ul`
  padding: 10px;
  font-size: 16px;
`;
const Item = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    color: orangered;
    border: 1px solid orangen;
  }
`;
const Title = styled.h1`
  font-size: 24px;
`;
export { List, Item, Title };
