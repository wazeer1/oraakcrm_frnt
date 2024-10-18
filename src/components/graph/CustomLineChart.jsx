import React from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', value: 400 },
  { name: 'Day 2', value: 300 },
  { name: 'Day 3', value: 200 },
  { name: 'Day 4', value: 278 },
  { name: 'Day 5', value: 189 },
  { name: 'Day 6', value: 239 },
  { name: 'Day 7', value: 349 },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#1F77FF" dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
