import React from "react";
import Tags from "./Tags";
function MyCard({ imagen, nombre, descripcion, tagTexto, tagColor }) {
  return (
    <div className="card">
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <Tags texto={tagTexto} color={tagColor} />
    </div>
  );
}

export default MyCard;
