import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  heighr: 100%;
`;

const Sidebar = () => {
  return (
    <Container className="bg-dark   p-3">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link link-light active" to="/">
            <FontAwesomeIcon icon="fa-solid fa-house-user" className="me-1" />
            Accueil
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link link-light" to="#">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" className="me-1" />
            Geocode Reverse
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link-light" to="/database">
            <FontAwesomeIcon icon="fa-solid fa-database" className="me-1" />
            Base de données
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
