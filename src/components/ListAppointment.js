import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const ListAppointments = ({appointments, deleteAppointment}) =>{

    const message  = Object.keys(appointments).length === 0 ? 'No appointments':'Manage your appointments here';

    return (
        <div className="card mt-2 py5">
            <div className="card-body"> 
                <h2 className="card-title text-center">{message}</h2>
            </div>
            <div className="appointment-list">
                { appointments.map((appointment) => (
                    < Appointment 
                        key={ appointment.id}
                        appointment={appointment}
                        deleteAppointment={ deleteAppointment}

                    />
                ))}

            </div>

        </div>
    );
}

ListAppointments.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default ListAppointments;