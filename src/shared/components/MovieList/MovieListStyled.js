import styled from 'styled-components';

export const MovieWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  min-width: 140px;
  width: calc((100% - 6 * 16px) / 5);
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  border: 1px solid rgba(227, 227, 227, 1);
  padding-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  &:nth-child(5n) {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    scale: 1.02;
  }
  & a {
    text-decoration: none;
    color: #032541;
  }
  & p {
    font-weight: 600;
  }
  & img {
    width: -webkit-fill-available;
   
  }
`;