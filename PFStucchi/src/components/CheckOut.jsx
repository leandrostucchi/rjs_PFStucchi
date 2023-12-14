import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContexts";
import '../../css/style.css';

const clearBuyer = { name: "", phone: "", email: ""};

export const CheckOut = () => {
    const [buyer, setBuyer] = useState(clearBuyer);
    const { items, clear } = useContext(CartContext);
    const total = items.reduce((acumulado, actual) => {
       return acumulado + actual.price * actual.quantity
    }, 0);

    const handleSendOrder = () => {
        const order = { buyer, items, total };
        const db = getFirestore();
        const orderCollection = collection(db, "order");
        addDoc(orderCollection, order)
        .then(({id}) => {
            if (id) {
              alert(`Gracias por su compra ${buyer.name}. Se enviara a ${buyer.email} el comprobante por un total de $ ${total}  Numero de Pedido ${id}`);
            }
        })
        .finally(() => {setBuyer(clearBuyer),clear()});
    };
    const handleChange = (ev) => {
      const {name, value} = ev.target;
      setBuyer(prev => {
        return{...prev, [name]: value};
      });
   }
   
   return (
    <> 
      <div className="col-md-4 order-md-1">
          <h3><span className="cabecera">Datos</span></h3>
          <form className="form">
              <div id="nombreTit">
                  <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                  <input type="text" className="form-control" name="name" id="nombre" value={buyer.name} onChange={handleChange} required placeholder="Nombre y Apellido"/>
              </div>
              <div id="emailTit" className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={buyer.email} required placeholder="Email@mail.com" />
              </div>
              <div  id="telefonoTit" className="col-md-6 mb-3">
                    <label>Telefono</label>
                    <input type="text" className="form-control" name="phone" id="Telefono" onChange={handleChange} value={buyer.phone} placeholder="Telefono" />
              </div>
          </form>
      </div>
      <div className="col-md-8 order-md-2 mb-4">
        <Button className="btn btn-success" type="submit" onClick={handleSendOrder} id="btnconfirmar">Confirmar</Button>
      </div>
   </>
  );
}