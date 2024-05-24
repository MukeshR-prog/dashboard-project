import React from 'react';
import './table.css';

const CheckTable = () => {
  const items = [
    { name: 'Mouse', progress: '17.5%', quantity: '2.458', date: '24.Jan.2024'  },
    { name: 'Keyboard', progress: '10.8%', quantity: '1.485', date: '12.Jun.2023' },
    { name: '5D glass', progress: '21.3%', quantity: '1.024', date: '5.Jan.2024' },
    { name: '5D projecter', progress: '31.5%', quantity: '858', date: '7.Mar.2024' },
    { name: 'Marketplace', progress: '12.2%', quantity: '258', date: '17.Dec.2023' },
    { name: 'Horizon UI PRO', progress: '17.5%', quantity: '2.458', date: '24.Jan.2024'  },
    // { name: 'Horizon UI Free', progress: '10.8%', quantity: '1.485', date: '12.Jun.2023' },
  ];

  return (
    <div className="check-table">
      <h3>Check Table</h3>
      <table className='tables2'>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>PROGRESS</th>
            <th>QUANTITY</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>{item.progress}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckTable;
