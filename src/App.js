import './App.css';
import FetchAPI from './FetchApi';
import SearchInput from './SearchInput';
import Days from './EightDay';
import Today from './Today'


function App() {
  return (
    <div className="App">
      <SearchInput />
      <div className="page">
      <div className="country">
      <Today />
      <FetchAPI />
      </div>
      
      <Days />
      </div>
    </div>
  );
}

export default App;
