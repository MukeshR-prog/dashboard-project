import React from 'react';
import './refunds.css';

const Refunds = () => {
  const totalRefunds = 449;
  const percentageChange = -22;
  const reasons = [
    { color: 'rgb(139, 92, 246)', reason: 'Having difficulties using the product', percentage: 30 },
    { color: 'rgb(91, 33, 182)', reason: 'Missing features I need', percentage: 22 },
    { color: 'rgb(56, 189, 248)', reason: 'Not satisfied about the quality of the product', percentage: 18 },
    { color: 'rgb(34, 197, 94)', reason: 'The product doesn’t look as advertised', percentage: 14 },
    { color: 'rgb(203, 213, 225)', reason: 'Other', percentage: 16 },
  ];

  return (
    <div className="refunds">
      <h3>Reason for Refunds</h3>
      <div className="refunds-info">
        <span className="total-refunds">{totalRefunds}</span>
        <span className="percentage-change" style={{ color:  'rgb(255, 255, 255)' }}>
          {percentageChange}%
        </span>
      </div>
      <div className="bar">
        {reasons.map((reason) => (
          <div
            
            className="bar-segment"
            style={{
              backgroundColor: reason.color,
              width: `${reason.percentage}%`,
            }}
          ></div>
        ))}
      </div>
      <ul className="reasons-list">
        {reasons.map((reason) => (
          <li  className="reason-item">
            <span className="reason-color" style={{ backgroundColor: reason.color }}></span>
            <span className="reason-text">{reason.reason}</span>
            <span className="reason-percentage">{reason.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Refunds;
