import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesVsRefunds = () => {
  const data = [
    { name: "Dec 23", sales: 5000, refunds: -3000 },
    { name: "Jan 24", sales: 7000, refunds: -2000 },
    { name: "Feb 24", sales: 6500, refunds: -4000 },
    { name: "Mar 24", sales: 8000, refunds: -3000 },
    { name: "Apr 24", sales: 6500, refunds: -4000 },
    { name: "May 24", sales: 8000, refunds: -3000 },
  ];

  const totalSales = "₹ 6796";
  const percentageChange = 34;

  return (
    <div
      style={{
      
        padding: "20px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "45%",
        margin: "auto"
       
      }}
    >
      <h3>Sales VS Refunds</h3>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          marginBottom: "20px",
        }}
      >
        <span
          style={{ 
            fontSize: "40px", 
            fontWeight: "bold", 
            marginRight: "10px" 
        }}
        >{totalSales}</span>
        <span
          style={{
            fontSize: "18px",
            color:
              percentageChange < 0 ? "rgb(245, 158, 11)" : "rgb(16, 185, 129)",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            borderRadius: "4px",
            padding: "2px 6px",
          }}
        >
          {`${percentageChange}%`}
        </span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="rgb(91, 33, 182)" />
          <Bar dataKey="refunds" fill="rgba(91, 33, 182, 0.5)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesVsRefunds;
