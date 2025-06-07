
import React from 'react';
import  './Agendamento.css';
import './AppointmentForm.css';


const AppointmentForm = ({ formData, onFormChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onFormChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onFormChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="notes">Observações (Opcional):</label>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={onFormChange}
                    rows="3"
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Confirmar Agendamento</button>
        </form>
    );
};

export default AppointmentForm;