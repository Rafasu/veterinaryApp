import React from 'react';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import ListAppointment from './components/ListAppointment';

class App extends React.Component{

  state = {
    appointments: []
  };

  //When app loads
  componentDidMount(){
    const appointmentLS = localStorage.getItem('appointments');
    if(appointmentLS){
      this.setState({
        appointments: JSON.parse(appointmentLS)
      })
    }
  }

  //When deleting or adding an appointment
  componentDidUpdate(){
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  createNewAppointment = (data) =>{
    const appointments = [...this.state.appointments, data]
    this.setState({
      appointments: appointments
    });
  };

  deleteAppointment = (id) => {
    const actApp = [...this.state.appointments];

    const appointments = actApp.filter( appointment => appointment.id !== id);

    this.setState({
      appointments: appointments
    });

  };

  render(){
    return (
      <div className="container">
        < Header 
          title='Veterinary Patients'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            < NewAppointment 
              createNewAppointment={this.createNewAppointment}
            />
            
          </div> 
          <div className="mt-5 col-md-10 mx-auto">
          < ListAppointment 
            appointments={this.state.appointments}
            deleteAppointment={ this.deleteAppointment}
          />
          </div>
        </div>
        
      </div>
    );
  }
}



export default App;
