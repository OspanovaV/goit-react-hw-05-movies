import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 450px;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.backdrop_path}); 
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Description = styled.div`
  padding-left: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(
    to right,
    rgba(220.5, 220.5, 220.5, 1) 150px,
    rgba(220.5, 220.5, 220.5, 0.84) 100%
  );
`;

export const NavTab = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid #032541;
  margin-right: 10px;
  &.active {
    color: white;
    background-color: #032541;
  }
`;

export const WrapperDesc = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;