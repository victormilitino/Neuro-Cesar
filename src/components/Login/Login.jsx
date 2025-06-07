import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/dashboard")

    console.log("teste", username, password)

    console.log("Envio")
  }

  return (
    <div className="container">
      <div className="Logo">
        <img src="/Logo/cesar.svg" alt="C.E.S.A.R" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-barra">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-barra">
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="/Recuperacao">Esqueceu a senha</a>
        </div>

        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
