import './App.css';
import GetData from './components/GetData';
import SendData from './components/SendData';
import {getList} from './components/GetData';

function App() {
  return (
    <div className="App">
      <h1>DATA FOR EPSP</h1>
      <h2>Sending Data to Firebase</h2>
      <SendData/>
      <h2>Getting Data from Firebase</h2>
      <GetData/>
    </div>
  );
}

export default App;
