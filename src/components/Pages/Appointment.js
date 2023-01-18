import React from 'react'
import './AppointmentType.css'
import { Card } from 'react-bootstrap'

import { useForm } from 'react-hook-form'

function Appointment() {
  return (
    <div className="col-md-4 appointmentType">
      <Card
        style={{
          width: '18rem',
          border: 'none',
          boxShadow: '5px 5px 10px lightGray',
        }}
      >
        <Card.Body>
          <button>BOOK APPOINTMENT</button>
          <div className="popupDetails">
            <form>
              <input name="time" className="takeInput" placeholder="Time" />
              <br />
              <br />
              <input
                name="name"
                className="takeInput"
                placeholder="Your Name"
              />
              <br />
              <input
                name="phoneNumber"
                className="takeInput"
                placeholder="Phone Number"
              />
              <br />
              <input name="email" className="takeInput" placeholder="Email" />

              <br />
              <input
                name="date"
                className="takeInput"
                placeholder="mm/dd/yyyy"
              />

              <br />
              <div className="submitBtn">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Appointment
