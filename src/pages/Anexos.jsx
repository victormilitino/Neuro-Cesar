import React, { useState } from "react"
import SideBar from "../components/SideBar/SideBar"
import CardPerfil from "../components/Card-Perfil/CardPerfil"
import "./Anexos.css"

export default function Anexos() {
  const [arquivosSelecionados, setArquivosSelecionados] = useState([])
  const extensoesPermitidas = ["pdf", "docx", "jpg", "jpeg", "png"]
  function handleFileChange(e) {
    const arquivos = Array.from(e.target.files)

    const arquivosValidos = arquivos.filter((arquivo) => {
      const extensao = arquivo.name.split(".").pop().toLowerCase()
      return extensoesPermitidas.includes(extensao)
    })

    if (arquivosValidos.length < arquivos.length) {
      alert(
        "Alguns arquivos foram ignorados por estarem em formatos não permitidos."
      )
    }

    setArquivosSelecionados(arquivosValidos)
  }
  function handleSubmit(e) {
    e.preventDefault()

    if (arquivosSelecionados.length === 0) {
      alert(
        "Por favor, selecione pelo menos um arquivo válido antes de enviar."
      )
      return
    }

    console.log("Arquivos prontos para envio:", arquivosSelecionados)
    alert("Arquivos prontos para envio (ver console).")
  }

  return (
    <div className="dashboard-wrapper" id="telaAnexos">
      <SideBar />

      <div className="main-content">
        <div className="dashboard-container container-fluid min-vh-100 p-4">
          <div className="anexos-container">
            <h1 className="titulo-anexos">Enviar Anexos</h1>
            <p className="texto-anexos">
              Arraste ou selecione seus laudos abaixo (PDF, DOCX, JPG, JPEG,
              PNG)
            </p>

            <form className="upload-form" onSubmit={handleSubmit}>
              <div className="upload-box">
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept=".pdf,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="upload-label">
                  Escolher Arquivos
                </label>
              </div>
              {arquivosSelecionados.length > 0 && (
                <div className="mt-3">
                  <p>Arquivos válidos selecionados:</p>
                  <ul>
                    {arquivosSelecionados.map((arquivo, index) => (
                      <li key={index}>{arquivo.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button type="submit" className="botao-enviar mt-4">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <CardPerfil
        name={"Frank"}
        email={"frank@cesar.com"}
        profissao={"Estudante"}
        formacao={"Análise e Desenvolvimento de Sistemas"}
        id="cardPerfilAnexos"
      />
    </div>
  )
}