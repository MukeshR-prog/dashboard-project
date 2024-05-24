import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Dashboard.css';
import Piechart from './piechart';
import SendMoney from './small';
import CheckTable from './table';
import Refunds from './refunds';
import SalesVsRefunds from './recharts';
const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
    { name: 'Aug', uv: 2490 },
    { name: 'Sep', uv: 1490 },
    { name: 'Oct', uv: 6000 },
    { name: 'Nov', uv: 3490 },
    { name: 'Dec', uv: 2090 },
];

const StatsCard = ({ icon, label, value, percentage, description }) => (
  <div className="stats-card">
    <div className="icon">{icon}</div>
    <div className="content">
      <h2>{value}</h2>
      <p>{label}</p>
      <small>{percentage} - {description}</small>
    </div>
  </div>
);

const Stats = () => {
  const statsData = [
    { icon: '👤', label: 'Users', value: '3,250', percentage: '85%', description: 'Yearly Users stats' },
    { icon: '💰', label: 'Sales', value: '1,140', percentage: '60%', description: 'Sales per month' },
    { icon: '💬', label: 'Comments', value: '85', percentage: '30%', description: 'Monthly comments' },
    { icon: '⭐', label: 'Rating', value: '8', percentage: '80%', description: 'This month ratings' }
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
      <div className="dashboard">
          <h1>Dashboard</h1>
          <Stats />
          <div className='others'>
            <Refunds/>
            <SalesVsRefunds/>
          </div>
          <div className="charts-container">
              <div className="chart">
                  <LineChart width={600} height={276} data={data}>
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                  </LineChart>
              </div>
              <Piechart /> 
          </div>
          <div className="other-content">
            <SendMoney/>
            <CheckTable/>
          </div>
      </div>
  );
};

export default Dashboard;
