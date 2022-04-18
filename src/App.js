import './App.css';
import SearchBox from './components/Search/SearchBox';

function App() {
  return (
    <div className="App">
      <h1 className="text-center Ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span> </h1>
        <SearchBox />
    </div>
  );
}

export default App;
