import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/Website.scss";

class Website extends Component {
  render() {
    return (
      <Container className="website">
        <Row>
          <Header/>
        </Row>
        <Row>
          <Search/>
        </Row>
        <Row>
          <SearchResults/>
        </Row>
      </Container>
    )
  }
}

export default Website;
