import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/analytics')
      .then(res => res.json())
      .then(setData);
  }, []);

  const chartData = {
    labels: data.map(d => d.status),
    datasets: [{
      data: data.map(d => d.count),
      backgroundColor: ['#4caf50', '#f44336', '#ff9800']
    }]
  };

  return (
    <div>
      <h2>SMS Analytics Dashboard</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default Dashboard;
