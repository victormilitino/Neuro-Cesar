import React from "react"
import "./CardPerfilPsicopedagogo.css" // Importação do CSS

export default function CardPerfilPsicopedagogo(props) {
  return (
    <div className="col-lg-3 mb-4">
      <div className="profile-card card">
        <div className="card-body">
          <div className="profile-avatar">
            <img
              src="/Img-Card-Perfil/PsicopedagogoPerfil.webp"
              alt=""
              id="imgAvatar"
            />
          </div>
          <div className="profile-info-card-container">
            <div className="profile-info-card">
              <p>
                <strong>Nome:</strong> {props.name}
              </p>
              <p className="">
                <strong>Email:</strong> {props.email}
              </p>
              <p className="">
                <strong>Profissão:</strong> {props.profissao || "Não informado"}
              </p>
              <p className="">
                <strong>Formação:</strong> {props.formacao || "Não informado"}
              </p>
            </div>
          </div>
          <div className="text-center">
            <a href="/perfil">
              <button className="btn btn-edit-profile btn-outline-primary mt-3">
                Editar Perfil de Usuário
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
