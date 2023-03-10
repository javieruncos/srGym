import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listaEjercicio } from "../../helper/queriesEjercicio";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationSuperior from "../ejercicios/PaginationSuperior";

const Detalle = () => {
  const [pectorales, setPectorales] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      console.log(respuesta);
      /* cambiar la respuesta*/
      const filtro = respuesta[0].filter(
        (item) => item.categoria === categoria
      );
      const resultado = filtro;
      setPectorales(resultado);
      console.log(resultado);
    });
  }, [categoria]);

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para {categoria} </h2>
      </div>
      <div className="row">
        {pectorales.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationSuperior></PaginationSuperior>
    </div>
  );
};

export default Detalle;
