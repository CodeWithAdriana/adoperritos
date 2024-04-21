import React from "react";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const perritosData = [
    {
      imagen: "/src/assets/img/1.jpg",
      nombre: "Huesito",
      descripcion: "Este es Huesito, lleno de energía y amor.",
      tag: { texto: "Nuevo", color: "primary" },
    },
    {
      imagen: "/src/assets/img/2.jpg",
      nombre: "Patitas",
      descripcion: "Patitas es tranquilo y le encanta acurrucarse.",
      tag: { texto: "Adoptado", color: "success" },
    },
    {
      imagen: "/src/assets/img/3.jpg",
      nombre: "Sonrisas",
      descripcion: "Sonrisas siempre está feliz y es muy juguetón.",
      tag: { texto: "Urgente", color: "danger" },
    },
    {
      imagen: "/src/assets/img/4.jpg",
      nombre: "Amor",
      descripcion: "Amor es cariñoso y siempre está buscando atención.",
      tag: { texto: "Reservado", color: "info" },
    },
  ];

  return (
    <div className="app-container">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {perritosData.map((perrito, index) => (
          <MyCard
            key={index}
            imagen={perrito.imagen}
            nombre={perrito.nombre}
            descripcion={perrito.descripcion}
            tagTexto={perrito.tag.texto}
            tagColor={perrito.tag.color}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
