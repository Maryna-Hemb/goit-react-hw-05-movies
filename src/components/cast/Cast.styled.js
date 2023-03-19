import styled from 'styled-components';

const CastList = styled.ul`
  list-style: none;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-around;
  border-bottom: 2px solid rgb(166 164 164);
`;
const CastItem = styled.li`
  //   margin: 10px 0 16px;
  padding: 2px 8px;
  width: 300px;
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
`;
const Name = styled.h3`
  margin: 8px 0;
`;
const Character = styled.p`
  margin: 0;
`;
export { CastList, CastItem, Name, Character };
