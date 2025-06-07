// src/pages/SchedulerPage/ConfirmationModal.jsx
import React from 'react';
import  './Agendamento.css';
import './ConfirmationModal.css';

const ConfirmationModal = ({ appointmentDetails, onClose }) => {
    if (!appointmentDetails) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Agendamento Confirmado!</h2>
                <p>Obrigado por agendar. Seus detalhes:</p>
                <ul>
                    <li><strong>Data:</strong> {appointmentDetails.date}</li>
                    <li><strong>Hora:</strong> {appointmentDetails.time}</li>
                    <li><strong>Nome:</strong> {appointmentDetails.name}</li>
                    <li><strong>Email:</strong> {appointmentDetails.email}</li>
                    {appointmentDetails.notes && <li><strong>Observações:</strong> {appointmentDetails.notes}</li>}
                </ul>
                <button onClick={onClose} className="modal-close-button">Fechar</button>
            </div>
        </div>
    );
};

export default ConfirmationModal;