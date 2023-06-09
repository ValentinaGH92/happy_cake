import { Container } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
import React from "react";
import cake from "../assets/torta.png";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span>{" "}
        <FaBirthdayCake />
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src={cake} alt="" />
    </Container>
  );
};

export default Home;
