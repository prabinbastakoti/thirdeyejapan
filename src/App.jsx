import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="relative">
      <ToastContainer />
      <div className="absolute w-full">
        <Navbar />
      </div>
      <Body />
    </div>
  );
}

export default App;
