import './App.scss';

import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';

import beersArr from './data/beer';


function App() {

  return (
    <div className="App">
      <Main beersArr={beersArr} />
    </div>
  );
}

export default App;
