import React from "react";
import * as C from "./styles";
// import { Container } from './styles';

function Header() {
  return (
    <>
      <C.Container>
        <C.Logo>Gustavo Henrique</C.Logo>
        <C.Navigation>
          <C.NavItem>Home</C.NavItem>
          <C.NavItem>Projetos</C.NavItem>
          <C.NavItem>Sobre Mim</C.NavItem>
          <C.NavItem>Linguagens</C.NavItem>
        </C.Navigation>
      </C.Container>
    </>
  );
}

export default Header;
