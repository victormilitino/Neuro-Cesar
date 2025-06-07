import React from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"
import {
  FaList,
  FaUserMd,
  FaCalendarAlt,
  FaComments,
  FaTrello,
  FaSignOutAlt,
} from "react-icons/fa"

const SideBar = () => {
  return (
    <div className="SideBar d-flex flex-column justify-content-between">
      <div>
        <div className="text-center my-4">
          <img src="/Logo/cesar.png" alt="Logo" className="logo" />
        </div>
        <ul className="nav flex-column px-3">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link">
              <FaList className="me-2" /> Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="/atendimentos" className="nav-link">
              <FaUserMd className="me-2" /> Atendimentos
            </a>
          </li>
         
          <li className="nav-item">
            <a href="/CalendarioAgenda" className="nav-link">
              <FaCalendarAlt className="me-2" /> Calendário
            </a>
          </li>
        </ul>
      </div>
      <div className="px-3 mb-4">
        <a href="/" className="nav-link logout-link">
          <FaSignOutAlt className="me-2" /> Logout
        </a>
      </div>
    </div>
  )
}

export default SideBar
