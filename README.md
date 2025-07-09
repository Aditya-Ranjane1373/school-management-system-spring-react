🎓 School Management System — Spring Boot + React.js
A full-stack School Management System built using Spring Boot (JPA, REST API), MySQL, and React.js with Bootstrap for styling. The system provides login and registration for Principal, Teacher, and Employee, enabling them to manage student and teacher records. No Spring Security is used.

🔧 Technologies Used
Java

Spring Boot

Spring Data JPA

MySQL

React.js

Bootstrap

Maven

REST API




school-management-frontend/
├── public/
│   └── index.html               # Main HTML file
│
├── src/
│   ├── assets/                  # Images, logos, and static assets
│   │   └── logo.png
│   │
│   ├── components/              # Reusable components
│   │   ├── Navbar.js
│   │   └── Footer.js
│   │
│   ├── pages/                   # Main page views
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── PrincipalDashboard.js
│   │   ├── TeacherDashboard.js
│   │   └── EmployeeDashboard.js
│   │
│   ├── student/                 # Student management components
│   │   ├── AddStudent.js
│   │   ├── UpdateStudent.js
│   │   └── StudentList.js
│   │
│   ├── teacher/                 # Teacher management components
│   │   ├── AddTeacher.js
│   │   ├── UpdateTeacher.js
│   │   └── TeacherList.js
│   │
│   ├── services/                # Axios API calls
│   │   ├── studentService.js
│   │   ├── teacherService.js
│   │   └── authService.js
│   │
│   ├── App.js                   # Main React app
│   ├── index.js                 # Entry point
│   └── App.css                  # Global styles (Bootstrap + custom)
│
├── package.json                # Project config & dependencies
└── vite.config.js /            # (If using Vite) or CRA config

