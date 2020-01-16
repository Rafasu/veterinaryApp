import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4'

const initialSate = {
    appointment: {
        pet: '',
        owner: '',
        dateD: '',
        hour: '',
        symptoms: ''
    }, 
    error: false

};




class NewAppointment extends Component {
    state = {
        ...initialSate
    }

    // User writes on inputs and changes state.
    handleChange = (e) =>{
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const {pet, owner, dateD, hour, symptoms} = this.state.appointment;

        if(pet === '' || owner === '' || dateD === '' || hour === '' || symptoms === ''){
            this.setState({
                error: true
            });
            return;
        }

        const newAppointment = {...this.state.appointment};
        newAppointment.id = uuidv4();

        this.props.createNewAppointment(newAppointment);
    
        this.setState({
            ...initialSate
        })
    };

    render() {

        const {error} = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5"> 
                        Fill in the form
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        All fields are necessary
                    </div> : null}
                    <form onSubmit={this.handleSubmit}>
                        {/* Form Group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name: </label>
                       
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet Name"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                />
                            </div>
                        </div>
                        {/* Form Group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Owner Name: </label>
                        
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Owner name"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}

                                />
                            </div>
                        </div>
                        {/* Form Group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date: </label>
                        
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="dateD"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.dateD}
                                />
                            </div>
                                <label className="col-sm-4 col-lg-2 col-form-label">Hour: </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hour"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hour}
                                />
                            </div>
                        </div>
                          {/* Form Group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms: </label>
                        
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Describre symptoms"
                                    name="symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.symptoms}
                                >
                                    
                                </textarea>
                            </div>
                        </div>

                        <input 
                        type="submit" 
                        className="py-3 mt-2 btn btn-success btn btn-block"
                        value="Add appointment"
                        />
                    </form>

                </div>
                
            </div>
        );
    };
}

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment;