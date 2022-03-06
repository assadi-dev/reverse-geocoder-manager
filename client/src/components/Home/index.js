import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../api";

const Container = styled.div`
  width: 90%;
`;

const Row = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 0.25fr;
  grid-gap: 2rem;
  align-items: center;
`;

const SearchRow = styled.div`
  display: flex;
`;

const Col = styled.div``;

const Home = () => {
  const [state, setState] = useState({
    annuaires: [
      {
        id: 70,
        latitude1: "45.63127",
        latitude2: "45.63127",
        latitude3: "45.6312",
        longitude1: "0.166008",
        longitude2: "0.166",
        longitude3: "0.166",
        result_city: "Angoulême",
        result_housenumber: "",
        result_name: "Hameau des Rossignols",
        result_postcode: "16000",
        departement: "16",
      },
    ],
  });

  useEffect(() => {
    api.get("annuaires").then((res) => {
      setState({ ...state, annuaires: res.data });
    });
  }, []);

  return (
    <Container>
      <h1>Accueil</h1>
      <Row className="action-row">
        <Col>
          <SearchRow>
            <div>
              <select
                className="form-select rounded"
                aria-label="Default select example"
              >
                <option value="result_city">result_city</option>
                <option value="departement">departement</option>
                <option value="result_postcode">result_postcode</option>
                <option value="result_housenumber">result_housenumber</option>
                <option value="result_name">result_name</option>
              </select>
            </div>
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded h-100"
                placeholder="Rechercher"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon="fas fa-search" />
              </button>
            </div>
          </SearchRow>
        </Col>
        <Col className="justify-content-center text-end"></Col>
      </Row>
      <div>
        <div className="d-flex">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <span className="page-link">Précédent</span>
              </li>
              <li className="page-item">
                <span className="page-link" href="#">
                  1
                </span>
              </li>
              <li className="page-item">
                <span className="page-link" href="#">
                  2
                </span>
              </li>
              <li className="page-item">
                <span className="page-link" href="#">
                  3
                </span>
              </li>
              <li className="page-item">
                <span className="page-link" href="#">
                  Suivant
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">lat1</th>
              <th scope="col">lon1</th>
              <th scope="col">lat2</th>
              <th scope="col">lon2</th>
              <th scope="col">lat3</th>
              <th scope="col">lon3</th>
              <th scope="col">result_housenumber</th>
              <th scope="col">result_name</th>
              <th scope="col">result_postcode</th>
              <th scope="col">result_city</th>
              <th scope="col">departement</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.annuaires.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.latitude1}</td>
                <td>{item.longitude1}</td>
                <td>{item.latitude2}</td>
                <td>{item.longitude2}</td>
                <td>{item.latitude3}</td>
                <td>{item.longitude3}</td>
                <td>{item.result_housenumber}</td>
                <td>{item.result_name}</td>
                <td>{item.result_postcode}</td>
                <td>{item.result_city}</td>
                <td>{item.departement}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
          <caption>450 Entrées</caption>
        </table>
      </div>
    </Container>
  );
};

export default Home;
