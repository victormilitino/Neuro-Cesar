// src/pages/Agendamento.jsx
import React, { useRef } from "react"
import SideBar from "../components/SideBar/SideBar"
import "./Agendamento.css"

const Agendamento = () => {
  const dateRef = useRef(null)
  const timeRef = useRef(null)

  const handleAgendar = () => {
    alert("Agendamento realizado com sucesso!")
    if (dateRef.current) dateRef.current.value = ""
    if (timeRef.current) timeRef.current.value = ""
  }

  return (
    <div className="app-container d-flex">
      <SideBar />

      <div className="main-content-agendamento flex-grow-1">
        <h1>Página de Agendamento</h1>
        <p>Aqui você pode agendar seus atendimentos.</p>

        <div className="agendamento-form-section">
          <p>Selecione a data e hora desejada:</p>
          <input type="date" className="form-control" ref={dateRef} />
          <input type="time" className="form-control mt-3" ref={timeRef} />
          <button className="btn btn-primary mt-4" onClick={handleAgendar}>
            Agendar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Agendamento
