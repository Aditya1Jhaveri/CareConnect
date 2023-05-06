CareConnect


CareConnect is a web application that allows patients to schedule appointments with doctors at a clinic. The application is built using ReactJS for the frontend, and uses a Spring Boot backend with a MySQL database.

Getting Started
To get started with the application, clone the repository to your local machine:
https://github.com/Aditya1Jhaveri/CareConnect.git

Once you have cloned the repository, navigate to the project directory and install the dependencies:
cd careconnect
npm install

Finally, start the development server:
npm start
The application should now be accessible at http://localhost:3000.



Backend
The CareConnect backend is built using Spring Boot, and uses a MySQL database to store the application data. To run the backend, follow these steps:

Install MySQL and create a new database called careconnect.
Open the src/main/resources/application.properties file and replace the spring.datasource.username and spring.datasource.password properties with your MySQL username and password.
Navigate to the backend directory and run ./mvnw spring-boot:run to start the backend server.
The backend API should now be accessible at http://localhost:8080/api.


Email Verification
CareConnect uses email verification to confirm doctor approval and appointment booking. When a doctor signs up for the application, an email is sent to the clinic administrator to confirm the doctor's approval. When a patient schedules an appointment, an email is sent to the patient to confirm the appointment booking.


Features
CareConnect allows patients to:

View the list of available doctors.
View the schedule of a particular doctor.
Schedule an appointment with a doctor.
View their scheduled appointments in Patient Dashboard.
View the Doctor Dashboard where all the pending appointments and approved appointments will be display.

Technologies Used
CareConnect is built using the following technologies:

ReactJS
Spring Boot
MySQL
Email verification


License
CareConnect is licensed under the MIT License. See the LICENSE file for details.

