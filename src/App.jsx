import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import SearchBar from './components/SearchBar';
import EmployeeDetailsPage from './components/EmployeeDetails';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = event => {
    setSearchId(event.target.value);
  };

  const handleDelete = id => {
    setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(employee =>
    employee.id.toString().includes(searchId)
  );

  return (
    <Router>
      <div className="App">
        <h1>Employee Dashboard</h1>
        <SearchBar value={searchId} onChange={handleSearchChange} />
        <Routes>
          <Route exact path="/" element={<HomePage employees={filteredEmployees} onDelete={handleDelete} />} />
          <Route path="/employee/:id" element={<EmployeeDetailsPage employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = ({ employees, onDelete }) => {
  return (
    <>
      {employees.length > 0 ? (
        <div className="card-container">
          {employees.map(employee => (
            <div key={employee.id} className="employee-card">
              <EmployeeCard employee={employee} onDelete={onDelete} />
            </div>
          ))}
        </div>
      ) : (
        <p>No employees found.</p>
      )}
    </>
  );
};

export default App;
