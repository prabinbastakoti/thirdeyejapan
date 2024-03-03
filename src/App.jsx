import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';

function App() {
  return (
    <div className="relative">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <Body />
    </div>
  );
}

export default App;
