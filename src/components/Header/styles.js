import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 10vh;
  font-family: "Poppins", sans-serif;
  background-color: #3b6266;

  @media (max-width: 900px) {
    display: grid;
    margin: auto;
    place-items: center;
    height: 15vh;
  }
`;

export const Logo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  animation: bounce;
  animation-duration: 2.5s;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  animation: bounce;
  animation-duration: 2.5s;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  color: white;
  transform: 2ms ease-in;
  position: relative;
  cursor: pointer;

  :before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 3px;
    width: 0;
    background-color: rgb(134, 172, 184);
    transition: all 1s ease;
  }

  :hover:before {
    width: 100%;
  }
`;
