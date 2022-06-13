import './App.scss';

import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';

import beers from './data/beer';

// Filters need to be in app
// functions passed to main -> ability to select need to be in nav

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
