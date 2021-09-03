import './App.css';
import MiddlePart from './MiddlePart'
import Header from './Header';
import AboutME from './AboutME';
import Availability from './Availability';
import SingleCard from './SingleCard';
import Portfolio from './Portfolio';
import Works from './Works';
import GetTouchs from './GetTouchs';
function App() {
  return (
    <div className="App">
      <Header />
      <MiddlePart />
      <AboutME />
      <Availability />
       <SingleCard/>
       <Portfolio/>
       <Works/>
       <GetTouchs/>
    </div>
  );
}

export default App;
