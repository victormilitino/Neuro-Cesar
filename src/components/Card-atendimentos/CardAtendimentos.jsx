import React from "react"
import "./CardAtendimentos.css" // Importação do CSS

export default function CardAtendimentos(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="stats-card card h-100">
        <div className="card-body text-center">
          <h5 className="card-title">{props.cardAtendimentoNome}</h5>
          <h2 className={`${props.cssValorPersonalizado}`}>{props.cardAtendimentoValor || "0"}</h2>
          <button className="btn btn-link ">{props.CardAtendimentosLink || ""}</button>
        </div>
      </div>
    </div>
  )
}