import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee, onDelete }) => {
    const handleDelete = () => {
        onDelete(employee.id);
    };

    return (
        <div className="employee-card">
            <h3>{employee.employee_name}</h3>
            <p>ID: {employee.id}</p>
            <p>Salary: ${employee.employee_salary}</p>
            <p>Age: {employee.employee_age}</p>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/employee/${employee.id}`}>View Details</Link>
        </div>
    );
};

export default EmployeeCard;
