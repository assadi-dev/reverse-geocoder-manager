import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./SideBar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-gap: 2rem;
`;

const Main = styled.div`
  overflow: hidden;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <div className="container">
      <h1>Reverse Geo</h1>

      <Container>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  );
};

export default Layout;
