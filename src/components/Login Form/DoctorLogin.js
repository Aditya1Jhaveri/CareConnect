import { useNavigate } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './dLog.css'
import Avatar from '@material-ui/core/Avatar'
import DoctorIcon from '../../images/DoctorIcon.png'
import PatientIcon from '../../images/PatientIcon.png'
import AdminIcon from '../../images/AdminIcon.jpeg'

export const DoctorLogin = (props) => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/PatientLogin')
  }

  const todash = () => {
    navigate('/DoctorDashboard')
  }

  let [authMode, setAuthMode] = useState('signin')
  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
    navigate('/DoctorForm')
  }

  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <div className="container">
              <div className="inner-container">
                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={DoctorIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    DOCTOR
                  </p>
                </button>

                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
                  onClick={login}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={PatientIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    PATIENT
                  </p>
                </button>

                <button
                  type="button"
                  className="btn btn-light btn-circle btn-xl"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={AdminIcon}
                    style={{
                      width: 70,
                      height: 70,
                      border: '2px solid  black',
                      // boxShadow: '2px 2px 20px grey',
                    }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      marginLeft: 2,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}
                  >
                    ADMIN
                  </p>
                </button>
              </div>
            </div>

            <h3 className="Auth-form-title">Doctor Sign In</h3>

            <div className="form-group mt-3">
              <TextField
                required
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                variant="standard"
                label="Username"
              />
            </div>

            <div className="form-group mt-3">
              <TextField
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
                variant="standard"
                label="Password"
                autoComplete="current-password"
              />
            </div>

            <div className="forpassword">
              <span className="link-danger" onClick={changeAuthMode}>
                Forgot password?
              </span>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={todash}
              >
                Submit
              </button>
            </div>

            <div className="text-center">
              Not registered yet?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default DoctorLogin
