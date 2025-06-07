// src/App.jsx
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PagAtendimentos from "./pages/PagAtendimentos"
import PagHistorico from "./pages/PagHistorico"
import Login from "./components/Login/Login"
import TelaPerfilUsuario from "./pages/TelaPerfilUsuario"
import Recuperacao from "./pages/Recuperacao"
import Agendamento from "./pages/Agendamento"
// import Calendario from "./pages/Calendario"
import CadastroPaciente from "./pages/CadastroPaciente"
import Anexos from "./pages/Anexos"
import CalendarioAgenda from "./pages/CalendarioAgenda"
import "./App.css"
import DescricaoAtendimentos from "./pages/DescricaoAtendimentos"
import DetalhesPaciente from "./pages/DetalhesPaciente"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/atendimentos" element={<PagAtendimentos />} />
        <Route path="/historico" element={<PagHistorico />} />
        <Route path="/perfil" element={<TelaPerfilUsuario />} />
        <Route path="/recuperacao" element={<Recuperacao />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route
          path="/descricaoAtendimentos"
          element={<DescricaoAtendimentos />}
        />
        {/* <Route path="/calendario" element={<Calendario />} /> */}
        <Route path="/cadastro" element={<CadastroPaciente />} />
        <Route path="/anexos" element={<Anexos />} />
        <Route path="/CalendarioAgenda" element={<CalendarioAgenda />} />
        <Route path="/paciente/:id" element={<DetalhesPaciente />} />
      </Routes>
    </div>
  )
}
