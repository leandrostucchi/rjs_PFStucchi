import { Container } from "react-bootstrap";

export const CartHead =() => {
  return(
    <Container>
        <div>
            <h3><span className="cabecera">Pedido</span></h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
            </table>
        </div>
    </Container>
  );
}