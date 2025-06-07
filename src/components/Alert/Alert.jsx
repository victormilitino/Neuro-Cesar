import React, { Children } from "react"
import "./Alert.css"

export default function Alert({ children, tipo }) {
  switch (tipo) {
    case "warning":
      return (
        <div
          className={`dashboard-alert alert alert-warning d-flex justify-content-between align-items-center`}
          role="alert"
        >
          {children}
        </div>
      )
    case "info":
      return (
        <div
          className={`dashboard-alert alert alert-info d-flex justify-content-between align-items-center`}
          role="alert"
        >
          {children}
        </div>
      )
    case "danger":
      return (
        <div
          className={`dashboard-alert alert alert-danger d-flex justify-content-between align-items-center`}
          role="alert"
        >
          {children}
        </div>
      )
    case "success":
      return (
        <div
          className={`dashboard-alert alert alert-success d-flex justify-content-between align-items-center`}
          role="alert"
        >
          {children}
        </div>
      )
  }
}
