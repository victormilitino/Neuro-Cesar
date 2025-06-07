
import React from 'react';
import  './Agendamento.css';
import './TimeSlots.css';

const TimeSlots = ({ timeSlots, selectedTime, onTimeSlotSelect }) => {
    if (!timeSlots || timeSlots.length === 0) {
        return <p>Não há horários disponíveis para esta data.</p>;
    }

    return (
        <div className="time-slots-container">
            {timeSlots.map((time, index) => (
                <button
                    key={index}
                    className={`time-slot-button ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => onTimeSlotSelect(time)}
                >
                    {time}
                </button>
            ))}
        </div>
    );
};

export default TimeSlots;