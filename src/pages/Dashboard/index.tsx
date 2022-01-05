import { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <h1>Dashboard</h1>
      {children}
    </>
  );
}

export default Dashboard;
