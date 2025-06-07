import React from "react"
import { Link } from "react-router-dom"
import AppointmentForm from './AppointmentForm';
import ConfirmationModal from './ConfirmationModal';
import TimeSlots from './TimeSlots'
import  './Agendamento.css';



const SchedulerPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', notes: '', time: '' }); 
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [confirmedAppointment, setConfirmedAppointment] = useState(null);

    useEffect(() => {
        if (selectedDate) {
            const simulatedTimeSlots = [
                '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
            ];
            setAvailableTimeSlots(simulatedTimeSlots);
        } else {
            setAvailableTimeSlots([]);
        }
    }, [selectedDate]);
const handleDateSelect = (date) => {
        setSelectedDate(date);
        setAvailableTimeSlots([]);
        setFormData(prevData => ({ ...prevData, time: '' })); 
    };

    const handleTimeSlotSelect = (time) => {
        setFormData(prevData => ({ ...prevData, time }));
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmitAppointment = (e) => {
        e.preventDefault();

        if (!selectedDate || !formData.time || !formData.name || !formData.email) {
            alert('Por favor, preencha todos os campos obrigatórios e selecione a data e o horário.');
            return;
        }

        const newAppointment = {
            date: selectedDate.toISOString().split('T')[0],
            time: formData.time,
            name: formData.name,
            email: formData.email,
            notes: formData.notes
        };
        console.log('Agendamento submetido:', newAppointment);
        setConfirmedAppointment(newAppointment);
        setShowConfirmationModal(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmationModal(false);
        setSelectedDate(null);
        setAvailableTimeSlots([]);
        setFormData({ name: '', email: '', notes: '', time: '' });
        setConfirmedAppointment(null);
    };

    return (
        <div className="scheduler-page">
            <h1>Agendamento Online</h1>

            <div className="scheduler-section">
                <h2>1. Selecione a Data</h2>
                <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                />
            </div>

            {selectedDate && (
                <div className="scheduler-section">
                    <h2>2. Selecione o Horário</h2>
                    <TimeSlots
                        timeSlots={availableTimeSlots}
                        selectedTime={formData.time}
                        onTimeSlotSelect={handleTimeSlotSelect}
                    />
                </div>
            )}

            {selectedDate && formData.time && (
                <div className="scheduler-section">
                    <h2>3. Preencha seus Dados</h2>
                    <AppointmentForm
                        formData={formData}
                        onFormChange={handleFormChange}
                        onSubmit={handleSubmitAppointment}
                    />
                </div>
            )}

            {showConfirmationModal && (
                <ConfirmationModal
                    appointmentDetails={confirmedAppointment}
                    onClose={handleCloseConfirmation}
                />
            )}
        </div>
    );
};

