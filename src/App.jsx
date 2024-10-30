
import './App.css';
import Navbar from './components/Daisyui/Navbar/Navbar';
import PriceOPtion from './components/Daisyui/Navbar/PriceOption/PriceOPtion';
import Phones from './components/LineChart/Phones/Phones';


function App() {
  return (
    <>
    <Navbar></Navbar>
      {/* <DsisyNav></DsisyNav> */}
      <h1 className="text-4xl bg-red-500">Vite + React</h1>
     <PriceOPtion></PriceOPtion>
      <Phones></Phones>
    </>
  );
}

export default App;
