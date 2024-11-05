import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import LogoutButton from './LogoutButton';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
      <p>Designation: {user.designation}</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
