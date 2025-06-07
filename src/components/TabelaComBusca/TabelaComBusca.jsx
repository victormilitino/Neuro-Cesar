import React, { useState, useEffect } from "react"
import "./TabelaComBusca.css"

export default function TabelaComBusca(props) {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cesar-gerenciador-pd.onrender.com"

  useEffect(() => {
    fetch(`https://cesar-gerenciador-pd.onrender.com/usuarios`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error))
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter(
    (item) =>
      item.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.matricula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cpf?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="tabelaPadrao">
      <div className="barraSuperior">
        <input
          className="form-control search-box"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <a href="/cadastro" className="btn btn-success btn-sm">
          Novo Cadastro
        </a>
      </div>

      <div className="tablescroll">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id || item.matricula}
                onClick={() => props.onLinhaClicada?.(item)}
                style={{ cursor: "pointer" }}
              >
                <td>{item.matricula}</td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
                <td>
                  <a
                    href="/descricaoAtendimentos"
                    className="btn btn-success btn-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    Novo Atendimento
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
