import './App.css';
import AirQuality from './Components/AirQuality';
import Temperature from './Components/Temperature';
import Audio from './Components/Audio';
import Lighting from './Components/Lighting';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
      <div>
        <img className="Logo"src="https://raw.githubusercontent.com/AVM-Solutions/Frontend-Developer-Task/945a8977a84d47751f61189c9ad98f14f099090c/ui_design_resources/logo.svg" alt="logo.svg"/>
      </div>
      <div className='data'>
      <AirQuality/>
      <Temperature/>
      <Audio/>
      <Display/>
      <Lighting/>
      </div>
    </div>
  );
}

export default App;
