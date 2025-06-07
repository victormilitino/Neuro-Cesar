import React from "react"
import "./Recuperacao.css"
import { useNavigate } from "react-router-dom"

const Recuperacao = () => {
  const navigate = useNavigate()

  function apertarEnviar() {
    alert("Um link de recuperação foi enviado para o seu e-mail.")
    navigate("/")
  }
  return (
    <div className="conteudo">
      <div className="barra">
        <div className="Logo">
          <img src="src\assets\logoBranca.png" alt="C.E.S.A.R" />
        </div>
      </div>
      <div>
        <h1 className="h1Recuperacao"> 
          <strong>Redefinir Senha</strong>
        </h1>

        <form>
          <div className="caixa">
            <div className="informe">
              <h3>
                Informe o e-mail para enviar um link de recuperação de senha
              </h3>
            </div>
            <div className="email">
              <input type="email" placeholder="E-mail" required />
            </div>
          </div>

          <button className="buttonRecuperacao" onClick={apertarEnviar}>
            {" "}
            Enviar{" "}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Recuperacao
