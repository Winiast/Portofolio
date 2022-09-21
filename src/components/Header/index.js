import React from "react";
import * as C from "./styles";
// import { Container } from './styles';

function Header(props) {
  return (
    <>
      <C.Container>
        <C.Logo>{props.Logo}</C.Logo>
        <C.Navigation>
          <C.NavItem>{props.navList1}</C.NavItem>
          <C.NavItem>{props.navList2}</C.NavItem>
          <C.NavItem>{props.navList3}</C.NavItem>
          <C.NavItem>{props.navList4}</C.NavItem>
        </C.Navigation>
      </C.Container>
    </>
  );
}

export default Header;
