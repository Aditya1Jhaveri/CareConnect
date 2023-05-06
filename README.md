
# CareConnect

CareConnect is a web application that allows patients to schedule appointments with doctors at a clinic. The application is built using ReactJS for the frontend, and uses a Spring Boot backend with a MySQL database. The application also includes email verification, which is used to confirm doctor approval and appointment booking.


## Getting Started
To get started with the application, clone the repository to your local machine:

https://github.com/Aditya1Jhaveri/CareConnect.git

Once you have cloned the repository, navigate to the project directory and install the dependencies:
```bash
cd careconnect
npm install
```

Finally, start the development server:
```bash
npm start
```

The application should now be accessible at http://localhost:3000
## Backend
The CareConnect backend is built using Spring Boot, and uses a MySQL database to store the application data. To run the backend, follow these steps:

1 Install MySQL and create a new database called careconnect.

2 Open the src/main/resources/application.properties file and replace the spring.datasource.username and spring.datasource.password properties with your MySQL username and password.

3 Navigate to the backend directory and run ./mvnw spring-boot:run to start the backend server.

The backend API should now be accessible at http://localhost:8080/api.
## Email Verification

CareConnect uses email verification to confirm doctor approval and appointment booking. When a doctor signs up for the application, an email is sent to the clinic administrator to confirm the doctor's approval. When a patient schedules an appointment, an email is sent to the patient to confirm the appointment booking.
## What Features Will You Find Here?

- Dynamic home page, serving as the landing page for all users.
- Admin, Doctor and Patient dashboards.
- Patient and Doctor login page with professional handling of all kinds of validations.
- Ability for a patient to select an appointment and view doctor information, as well as their own appointment information.
- Option to select a doctor and view appointment date and time.
- View the schedule of a particular doctor.
- View for Doctor in Doctor Dashboard where all the pending appointments and approved appointments will be display.
- Responsive design with a dynamic header and preloader.



## Technologies Used
CareConnect is built using the following technologies:

Front End :
- React
- JavaScript(ES6)
- React-Bootstrap
- Html
- CSS5
- Materail UI 
- Bootstrap
- Formik
- Yup
- Axios
- React toastify

Back-End:

- SpringBoot
- MySQL
- Email verification
- Cors


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Overview page
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Sign Up page
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Sign In page
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Booking Appointment 
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Doctor Registration page
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Patient Dashboard 
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Doctor Dashboard
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



## License
CareConnect is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.



