import { LineChart } from 'recharts';
import './App.css';
import Navbar from './components/Daisyui/Navbar/Navbar';
import PriceOPtion from './components/Daisyui/Navbar/PriceOption/PriceOPtion';
// import DsisyNav from './components/Daisyui/DsisyNav';

function App() {
  return (
    <>
    <Navbar></Navbar>
      {/* <DsisyNav></DsisyNav> */}
      <h1 className="text-4xl bg-red-500">Vite + React</h1>
     <PriceOPtion></PriceOPtion>
     <LineChart></LineChart>
    </>
  );
}

export default App;
