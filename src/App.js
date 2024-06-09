import logo from './logo.svg';
import Tile from './components/Tile/Tile';
import Rod from './components/Rod/Rod';
import { getColorByTileNumber } from './utils/helperFunctions';

function App() {
  return (
    <div className="App">
     <Rod rodName='A'></Rod>
    </div>
  );
}

export default App;
