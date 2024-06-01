import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
      max: 150,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};


export default function ChartWithSelectByDay(props) {
  // console.log("days:" + props.days);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(function () {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    fetch('http://localhost:8000/api/sensor/getSensorAverageData')
      .then(response => response.json())
      .then(data => {
        console.log("data:" + JSON.stringify(data));
        const chartData = {
          labels: data.labels, // 假设API响应包含标签数组
          datasets: [
            {
              label: 'Average Data',
              data: data.values, // 假设API响应包含值数组
              fill: false,
              tension: 0.3,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(34, 192, 255, 0.5)",
            }
          ]
        };
        setChartData(chartData);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return <Bar data={chartData} options={options} ref={chartRef} />;
}
 
