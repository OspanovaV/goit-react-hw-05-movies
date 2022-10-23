import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;
export const Form = styled.form`
  padding-top: 3px;
`;
export const Button = styled.button`
   position: absolute;
    top: 5px;
    right: 5px;
    color: rgb(94, 90, 90);
    border: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: initial;

  &:hover,
  &:focus {
    color: #a8b5c0;   
  }
  `;
  export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
  right: 6px;
`;
