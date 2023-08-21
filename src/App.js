import './App.css';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Banner3 from './Components/Banner3';
import Frameone from './Components/Frameone';
import Line from './Components/Line';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Line/>
      <Banner/>
      <Frameone/>
      <Banner2/>
      <Banner3/>
     
    </div>
  );
}

export default App;


