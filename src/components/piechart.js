import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './Dashboard.css';


const Piechart = () => {
    const data = {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
            data: [65, 10, 30],  // Example data
            backgroundColor: ['#377dff', '#a6c8ff', '#59a6ff'],
            hoverBackgroundColor: ['#377dff', '#a6c8ff', '#59a6ff']
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className="pie-chart-container">
            <div className="pie-chart-header">Users by device</div>
           
            <div className="pie-chart-footer">
            <Pie data={data} options={options} />
                <select>
                    <option>Last Week</option>
                    <option>Last Month</option>
                    <option>Last Year</option>
                </select>
                {/* <a href="/full-report" className="full-report-link">View full report</a> */}
            </div>
        </div>
    );
};

export default Piechart;
