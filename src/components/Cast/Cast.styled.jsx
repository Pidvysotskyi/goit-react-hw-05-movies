import styled from 'styled-components';

export const CastList = styled.div`
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CastItem = styled.li`
  width: calc((100% - 140px) / 8);
`;
export const CastImage = styled.img`
  width: 100%;
`;

export const CharacterSpan = styled.span`
  display: block;
  font-weight: 700;
`;
