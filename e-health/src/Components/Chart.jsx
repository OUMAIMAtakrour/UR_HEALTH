import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const VisitsChart = () => {
  const data = [
    { name: 'Monday', 'Job View': 30 },
    { name: 'Tuesday', 'Job View': 40 },
    { name: 'Wednseday', 'Job View': 70 },
    { name: 'Thursday', 'Job View': 35 },
    { name: 'Friday', 'Job View': 60 },
    { name: 'Saturday', 'Job View': 50 },
    { name: 'Sunday', 'Job View': 40 }
   
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar
        
          dataKey="Job View"
          fill="#8AACEE"
          barSize={60}
          radius={[5, 5, 5, 5]}
       
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VisitsChart;