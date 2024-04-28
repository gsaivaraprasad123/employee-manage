import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetailsPage = ({ employees }) => {
    const { id } = useParams();
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (!employee) {
        return <p>Employee not found.</p>;
    }

    return (
        <div className="employee-details">
            <h2>{employee.employee_name}</h2>
            <p>ID: {employee.id}</p>
            <p>Salary: ${employee.employee_salary}</p>
            <p>Age: {employee.employee_age}</p>
            {/* Other details */}
        </div>
    );
};

export default EmployeeDetailsPage;
