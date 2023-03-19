import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AdditionalContainer = styled.div`
  padding: 16px;
  border-bottom: 2px solid rgb(166 164 164);
`;

const AdditionalLink = styled(NavLink)`
  // text-decoration: none;
  font-size: 18px;
  &.active {
    color: orangered;
  }
`;
export { AdditionalContainer, AdditionalLink };
