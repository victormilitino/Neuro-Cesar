import React, { useState } from "react"
import "./ComentarioBox.css"

export default function ComentarioBox() {
  const [comentario, setComentario] = useState("")

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cesar-gerenciador-pd.onrender.com"

  const handleAddComentario = async () => {
    if (comentario.trim() === "") return

    const novoComentario = {
      texto: comentario,
      data: new Date().toISOString(),
    }

    try {
      const response = await fetch(
        `https://cesar-gerenciador-pd.onrender.com/descricaoAtendimentos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoComentario),
        }
      )

      if (!response.ok) throw new Error("Erro no POST")

      alert("Descrição salva com sucesso!")
      setComentario("")
    } catch (error) {
      console.error("Erro:", error)
      alert("Falha ao adicionar a descrição.")
    }
  }

  return (
    <div className="comentario-box">
      <h3>Descrição de Atendimento:</h3>
      <textarea
        rows={10}
        cols={50}
        className="comentario-textarea"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escreva como foi o atendimento aqui..."
      />
      <button className="comentario-button" onClick={handleAddComentario}>
        Adicionar Descrição
      </button>
    </div>
  )
}
