import React from 'react';
import StudentTable from './StudentTable';

function TeacherDashboard() {
  return (
    <div>
      <h3 style={{color:"white"}} className="text-center mb-4">Teacher Dashboard</h3>
      <StudentTable />
    </div>
  );
}

export default TeacherDashboard;
