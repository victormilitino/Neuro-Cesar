import React from "react"
import "./PagAtendimentos.css"
import SideBar from "../components/SideBar/SideBar"
import CardPerfil from "../components/Card-Perfil/CardPerfil"
import ComentarioBox from "../components/ComentarioBox/ComentarioBox"

export default function PagAtendimentos() {
  return (
    <div className="dashboard-wrapper">
      <SideBar />
      {/* Conteúdo principal */}
      <div className="dashboard-container container-fluid min-vh-100 p-4">
        <div className="card-lateral d-flex ">
          <div className="comentario-area">
            {" "}
            <ComentarioBox />{" "}
          </div>
          <CardPerfil
            name={"Gabriel"}
            email={"Gabriel@cesar.com"}
            profissao={"Estudante"}
            formacao={"Ciências da Computação"}
          />
        </div>
      </div>
    </div>
  )
}
