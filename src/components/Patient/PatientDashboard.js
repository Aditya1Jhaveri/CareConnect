import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { RxDashboard } from 'react-icons/rx'
import { FaHistory } from 'react-icons/fa'

import './pdash.css'
import CareConnectLogo from '../../images/CareConnectLogo.jpg'
import PProfile from './PProfile'

function PatientDashboard() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={`body-area${showNav ? ' body-pd' : ''}`}>
      <header className={`header${showNav ? ' body-pd' : ''}`}>
        <div className="header_toggle">
          <i
            className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <h2 style={{ paddingTop: 10, paddingLeft: 10 }}>CareConnect</h2>

        <PProfile />

        {/* <div className="header_img">
          <img
            src="https://reqres.in/img/faces/5-image.jpg"
            alt="Clue Mediator"
          />
        </div> */}
      </header>
      <div className={`l-navbar${showNav ? ' show' : ''}`}>
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              <img
                src={CareConnectLogo}
                alt=""
                className="navbar-icon"
                width={30}
              />
              <span className="nav_logo-name">CareConnect</span>
            </a>

            <div className="nav_list">
              <a href="/" className="nav_link">
                <RxDashboard style={{ fontSize: '1.5rem' }} />
                <span className="nav_name">DashBoard</span>
              </a>
              <a href="/" className="nav_link">
                <i
                  className="bi bi-person-check nav_icon"
                  style={{ fontSize: '1.5rem' }}
                />
                <span className="nav_name">Add Appointment</span>
              </a>
              <a href="https://cluemediator.com" className="nav_link">
                <FaHistory style={{ fontSize: '1.5rem' }} />
                <span className="nav_name">Patient History</span>
              </a>
            </div>
          </div>
          <a href="/" className="nav_link">
            <i
              className="bi bi-box-arrow-left nav_icon"
              style={{ fontSize: '1.5rem' }}
            />
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      <div className="pt-4 pb-4">
        <h4>What is Lorem Ipsum?</h4>
        <p className="fs-5 text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>Why do we use it?</h4>
        <p className="fs-5 text-secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <h4>What is Lorem Ipsum?</h4>
        <p className="fs-5 text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>Why do we use it?</h4>
        <p className="fs-5 text-secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <h4>What is Lorem Ipsum?</h4>
        <p className="fs-5 text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>Why do we use it?</h4>
        <p className="fs-5 text-secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  )
}

export default PatientDashboard
