import Body from './Component/Body/Body';
import Navbar from './Component/Navbar/Navbar';
import PhotoCarousal from './Component/PhotoCarousal/PhotoCarousal';
import Photo1 from './assets/carousal1.jpg';
import Photo2 from './assets/carousal2.jpg';
import Photo3 from './assets/carousal3.jpg';
import Photo4 from './assets/carousal4.jpg';
import Photo5 from './assets/carousal5.jpg';
import Photo6 from './assets/carousal6.jpg';
import Photo7 from './assets/carousal7.jpg';
import Photo8 from './assets/carousal8.jpg';
import Photo9 from './assets/carousal9.jpg';

const Photos = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
];

function App() {
  return (
    <div>
      <PhotoCarousal photos={Photos} />
    </div>
  );
}

export default App;
