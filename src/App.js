import './App.css';
import BarChartAverageData from './components/BarChartAverageData';

function App() {

 return (
  <div className='App-principal'>
    <div className='App'>
      Sensors Data Monitoring
    </div>

    {/* after considering a dashboard, I decided to use a simple bar chart for a basic version */}
    <div className='app-seleccionador'>
      <BarChartAverageData />
    </div>
  </div>
  );
}

export default App;
