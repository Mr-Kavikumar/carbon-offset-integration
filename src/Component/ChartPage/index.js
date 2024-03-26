import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Dashboard from '../DashboardPage';

const ChartPage = () => {
    const [lineChartData, setLineChartData] = useState({
        datasets: [],
      });
  const [barChartData, setBarChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
        suggestedMax: 200,
        maxTicksLimit: 5,
      },
      x: {
        type: 'category',
        offset: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.thingspeak.com/channels/2409021/feeds.json";
      try {
        const response = await axios.get(url);
        const data = response.data.feeds;

        // Group data by date and calculate average CO value for each day
        const groupedData = data.reduce((acc, feed) => {
          const date = new Date(feed.created_at).toLocaleDateString();
          if (!acc[date]) {
            acc[date] = {
              totalCO: 0,
              count: 0,
            };
          }
          acc[date].totalCO += Number(feed.field1);
          acc[date].count++;
          return acc;
        }, {});

        const averages = Object.entries(groupedData).map(([date, { totalCO, count }]) => ({
          date,
          averageCO: totalCO / count,
        }));


        // Group data by hour and calculate average CO value for each hour
        const groupedDataLine = data.reduce((acc, feed) => {
            const timestampHour = new Date(feed.created_at);
            const hour = timestampHour.getHours();
            const dateKey = `${timestampHour.toLocaleDateString()} ${hour}:00`; // Key in the format: "MM/DD/YYYY HH:00"
            if (!acc[dateKey]) {
              acc[dateKey] = {
                totalCO: 0,
                count: 0,
              };
            }
            acc[dateKey].totalCO += Number(feed.field1);
            acc[dateKey].count++;
            return acc;
          }, {});

          const hourlyAverages = Object.entries(groupedDataLine).map(([dateKey, { totalCO, count }]) => ({
            date: dateKey,
            averageCO: totalCO / count,
          }));

        const timestamps = averages.map(entry => entry.date);
        const averageCOValues = averages.map(entry => entry.averageCO);
        const coValues = data.map(feed => Number(feed.field1));

        const timestampsLine = hourlyAverages.map(entry => entry.date);
        const averageCOLine = hourlyAverages.map(entry => entry.averageCO);

        setLineChartData({
            labels: timestampsLine,
            datasets: [
              {
                label: 'Average CO Level (per hour)',
                data: averageCOLine,
                borderColor: '#00205b',
                backgroundColor: 'rgba(132, 189, 0, 0.2)',
                borderWidth: 1,
              },
            ],
        });

        setBarChartData({
          labels: timestamps,
          datasets: [
            {
              label: 'Average CO Level (per day)',
              data: averageCOValues,
              type: 'bar',
              backgroundColor: '#2F2F81',
              borderWidth: 1,
              yAxisID: 'y',
            },
          ],
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex'>
      <Dashboard/>
    <div className="container mx-auto px-2 py-4">
    <h1 className="text-3xl font-bold mb-8">Chart</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto' }}>
      <div className="bg-gradient-to-r from-pink-100 via-red-100 to-red-200" style={{ width: '48%', backgroundColor: '#f3f4f7', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Line Graph</h2>
        <div style={{ height: '400px' }}>
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-100 via-red-100 to-red-200" style={{ width: '48%', backgroundColor: '#f3f4f7', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Bar Graph</h2>
        <div style={{ height: '400px' }}>
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ChartPage;
