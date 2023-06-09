import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioContacto = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label> Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="danger">Enviar</Button>
      </div>
    </Form>
  );
};

export default FormularioContacto;
