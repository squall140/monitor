import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const sensorsData = [50, 60, 30, 50, 70, 80, 90];
const labels = ['05-31', '06-01', '06-02', '06-03', '06-04', '06-05', '06-06'];

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
      max: 500,
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
  
  console.log("days:" + props.days);

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(function () {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    setChartData({
      datasets: [
        {
          label: "Datetime",
          data: sensorsData,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    });
  }, []);

  return <Line data={chartData} options={options} ref={chartRef} />;
}
 
