import React, { useEffect, useState } from "react"
import "./PagHistorico.css"
import SideBar from "../components/SideBar/SideBar"
import CardPerfil from "../components/Card-Perfil/CardPerfil"

export default function HistoricoAtendimentos() {
  const [descricoes, setDescricoes] = useState([])

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "json-server --watch src/api/api.json --port 3000"
      : "https://cesar-gerenciador-pd.onrender.com"

  const carregarDescricoes = () => {
    fetch(`https://cesar-gerenciador-pd.onrender.com/descricaoAtendimentos`)
      .then((res) => res.json())
      .then((data) => setDescricoes(data.reverse()))
      .catch((err) => console.error("Erro ao carregar descrições:", err))
  }

  useEffect(() => {
    carregarDescricoes()
  }, [])

  const deletarDescricao = async (id) => {
    const confirm = window.confirm(
      "Tem certeza que deseja apagar essa descrição?"
    )
    if (!confirm) return

    try {
      const res = await fetch(
        `https://cesar-gerenciador-pd.onrender.com/descricaoAtendimentos/${id}`,
        {
          method: "DELETE",
        }
      )

      if (res.ok) {
        alert("Descrição apagada com sucesso!")
        carregarDescricoes()
      } else {
        alert("Erro ao apagar.")
      }
    } catch (error) {
      console.error("Erro ao apagar descrição:", error)
      alert("Erro na conexão.")
    }
  }

  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          <div className="row">
            <div className="col-lg-9">
              <div className="prontuario-container">
                <div className="text-center mb-4">
                  <h1 className="prontuario-title">Histórico de Atendimento</h1>
                </div>

                <div className="timeline">
                  {descricoes.map((item) => (
                    <div key={item.id} className="timeline-item atendimento">
                      <div className="timeline-header">
                        <h3>Atendimento Registrado</h3>
                        <div className="timeline-meta">
                          <span className="timeline-date">
                            {item.data || "Data não informada"}
                          </span>
                          <span className="timeline-profissional">
                            Profissional não informado
                          </span>
                        </div>
                      </div>
                      <div className="timeline-content">
                        <p>{item.texto}</p>
                        <button
                          className="btn btn-outline-danger btn-sm mt-2"
                          onClick={() => deletarDescricao(item.id)}
                        >
                          Apagar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-success">
                    Iniciar Novo Atendimento
                  </button>
                </div>
              </div>
            </div>

            <CardPerfil
              name={"Gabriel Costa"}
              email={"gabriel.costa@email.com"}
              profissao={"Paciente"}
              formacao={"Matrícula: PSI20240501"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
