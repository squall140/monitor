import './App.css';
// import { useState } from 'react';
import BarChartAverageData from './components/BarChartAverageData';


function App() {
 
//  const [optionSelected, setOptionSelected]= useState('');

 return (
  <div className='App-principal'>
    <div className='App'>
      Sensors Data Monitoring
    </div>
 
   <div className='app-seleccionador'>
          {/* <h4>Sensor Average Data </h4> */}
            {/* <select  className='select-contenedor' value={optionSelected} onChange={(a)=>{const selected = a.target.value;setOptionSelected(selected);}}>
              <option>Days</option>  
              <option value='7'>7</option>
              <option value='30'>30</option>
            </select>  
            
            {optionSelected === '7' && <LineChartByDay days='7'/>}
            {optionSelected === '30' && <LineChartByDay days='30'/>} */}

          <BarChartAverageData />
 
          </div>
  </div>
  );
}

export default App;
