//import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
//import { getFirestore, collection, addDoc } from "firebase/firestore";
//import moment from "moment";

//import { CartContext } from "../contexts/CartContext";

import '../../css/style.css';

 const clearBuyer = {name: "", phone: "", email: ""};

// const fechaYHora = moment();
// const fechaCompra = fechaYHora.format("DD-MM-YYYY");
// const horaCompra = fechaYHora.format("HH:mm:ss");

// const date = { fecha: fechaCompra, hora: horaCompra };

export const CheckOut = () => {
   const [buyer, setbuyer] = useState(clearBuyer);
  // const { items, clear } = useContext(CartContext);

  // const total = items.reduce((acumulado, actual) => {
  //   return acumulado + actual.price * actual.quantity
  // }, 0);

  // const handleSendOrder = () => {
  //   const order = { buyer, items, date, total };

  //   const db = getFirestore();

  //   const orderCollection = collection(db, "order");

  //   addDoc(orderCollection, order).then((id) => {
  //     if (id) {
  //       alert(`Su orden: ${id} ha sido completada!`);
  //     }
  //   }).finally(() => {setbuyer(clearBuyer), clear()});

  // };
  
   const handleChange = (ev) => {
     const {name, value} = ev.target;
      // let valida = "";
      // if(name === "nombre"){
      //   valida = ValidaNombre(value);
      // }

    //  if(name === "email"){
    //   valida = ValidaNombre(value);
    //}

     setbuyer(prev => {
       return{...prev, [name]: value};
     });

   }

  return (
    <>    
      <div className="col-md-4 order-md-1">
          <h3><span className="cabecera">Datos</span></h3>
          <div id="nombreTit">
              <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
              <input type="text" className="form-control" name="nombre" id="nombre" onChange={handleChange} required placeholder="Nombre y Apellido"/>
          </div>
          <div className="input-group col-12">
              <div id="emailTit" className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" id="email" onChange={handleChange} required placeholder="Email@mail.com" />
              </div>
              <div id="email2Tit" className="col-md-6 mb-3">
                  <label htmlFor="email2" className="form-label">Confirmacion Email </label>
                  <input type="email" className="form-control" name="email2" id="email2" onChange={handleChange} required placeholder="Email@mail.com" />
              </div>
          </div>
          <div  id="telefonoTit" className="col-md-6 mb-3">
                <label>Telefono</label>
                <input type="text" className="form-control" name="Telefono" id="Telefono" onChange={handleChange} required placeholder="Telefono" />
          </div>
      </div>
      <div className="col-md-8 order-md-2 mb-4">
        <button className="btn btn-success" type="submit" id="btnconfirmar">Confirmar</button>
        <button className="btn btn-danger" type="reset" id="btncancelar">Cancelar</button>
      </div>
  </>
  )
}


// function ValidacionPrevia(){
//   let valida = ValidaNombre();
//   if (valida!= "") MensajeError(valida,titulo);
//   valida =  ValidaMail();
//   if (valida!= "") MensajeError(valida,titulo);    
//   valida =  ValidaTipoDocumento();
//   if (valida!= "") MensajeError(valida,titulo);
//   valida =  ValidaDocumento();
//   if (valida!= "") MensajeError(valida,titulo);

// }


function ValidaNombre(value) {
  let resultado = "";
  if(value<3) resultado = `Tiene menos de 3 letras`;
  alert(resultado);
  //return resultado;
}


function ValidaMail(email,email2) {
  let resultado = "";
  if (!EstadoMail(email)) resultado = "Mail incorrecto";
  if (!EstadoMail(email2)) resultado = "Mail incorrecto";
  if(resultado == ""){
      if (email.value.toLowerCase() !== email2.value.toLowerCase()) resultado = "Mail distintos";
  }
  MensajeError(resultado);
  return resultado;
}



function MensajeError(resultado) {
  alert(resultado);

  // debuguear(analiza,resultado);
  // debuguear(analiza,titulo);
  // if (resultado != "") {
  //     Swal.fire({
  //         title: titulo.innerText,
  //         text: resultado,
  //         icon: 'error',
  //         confirmButtonText: 'Cancel'
  //       })
  // }
}
