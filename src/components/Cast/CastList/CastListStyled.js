import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  min-width: 140px;
  width: 140px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 6px;
  border: 1px solid rgba(227, 227, 227, 1);
  padding-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  &:nth-child(8n) {
    margin-right: 0;
  }
  & img {
    width: 100%;
  }
`;