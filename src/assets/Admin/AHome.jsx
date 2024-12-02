import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import styles from './AHome.module.css';

function AHome() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>

      <div className={styles.mainCards}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardIcon}>
              <BsFillArchiveFill />
            </div>
            <div>
              <h1>50</h1>
              <p>Products</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardIcon}>
              <BsFillGrid3X3GapFill />
            </div>
            <div>
              <h1>30</h1>
              <p>Categories</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardIcon}>
              <BsPeopleFill />
            </div>
            <div>
              <h1>100</h1>
              <p>Customers</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardIcon}>
              <BsFillBellFill />
            </div>
            <div>
              <h1>5</h1>
              <p>Notifications</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <h3>Revenue (Last 6 months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AHome;
