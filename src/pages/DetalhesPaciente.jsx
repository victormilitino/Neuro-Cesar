import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SideBar from "../components/SideBar/SideBar"
import "./DetalhesPaciente.css"

function DetalhesPaciente() {
  const { id } = useParams()
  const [paciente, setPaciente] = useState(null)

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cesar-gerenciador-pd.onrender.com"

  useEffect(() => {
    fetch(`https://cesar-gerenciador-pd.onrender.com/usuarios/${id}`)
      .then((res) => res.json())
      .then((data) => setPaciente(data))
      .catch((err) => console.error("Erro ao buscar paciente:", err))
  }, [id])

  if (!paciente)
    return <p className="text-center mt-5">Carregando dados do paciente...</p>

  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="container-forms-detalhe" id="containerDetalhesPaciente">
        <fieldset className="border p-4 rounded shadow-sm bg-white">
          <h3 className="text-center mb-4 titulo-principal">
            Detalhes do Paciente
          </h3>

          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Nome:</strong> {paciente.nome}
            </div>
            <div className="col-md-6">
              <strong>Matrícula:</strong> {paciente.matricula}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <strong>CPF:</strong> {paciente.cpf}
            </div>
            <div className="col-md-6">
              <strong>Data de Nascimento:</strong> {paciente.data_nascimento}
            </div>
          </div>

          {paciente.NomeResponsavel && (
            <div className="mb-3">
              <strong>Responsável:</strong> {paciente.NomeResponsavel}
            </div>
          )}

          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Telefone:</strong> {paciente.telefone}
            </div>
            <div className="col-md-6">
              <strong>Contato Emergência:</strong> {paciente.contatoEmergencia}
            </div>
          </div>

          <div className="mb-3">
            <strong>E-mail:</strong> {paciente.email}
          </div>
          <div className="mb-3">
            <strong>Tipo de Vínculo:</strong> {paciente.TipoDeVinculo}
          </div>

          {paciente.curso && (
            <div className="mb-3">
              <strong>Curso:</strong> {paciente.curso}
            </div>
          )}

          <div className="mb-3">
            <strong>Possui neurodivergência?:</strong> {paciente.possui}
          </div>

          <div className="mb-3">
            <strong>Turno:</strong>{" "}
            {Array.isArray(paciente.turno)
              ? paciente.turno.join(", ")
              : paciente.turno}
          </div>

          {paciente.mensagem && (
            <div className="mb-3">
              <strong>Mensagem adicional:</strong> {paciente.mensagem}
            </div>
          )}

          <div className="text-center mt-4">
            <a
              href="/atendimentos"
              className="btn btn-secondary"
              id="botaoVoltarDetalhes"
            >
              Voltar para atendimentos
            </a>
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default DetalhesPaciente
