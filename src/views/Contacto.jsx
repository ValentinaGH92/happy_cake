import { Container } from "react-bootstrap";

import FormularioContacto from "../components/FormularioContacto";

const Contacto = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos, en qué te podemos ayudar?</h1>
      <FormularioContacto />
    </Container>
  );
};

export default Contacto;
