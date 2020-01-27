import React from 'react';
import Welcome from './Components/Welcome';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Store from './Store/store';
import './App.css';

function App() {  
  return (
    <div className="App">
      <Store>
        <React.Fragment>
          <Welcome />
          <SearchBar />
          <SearchResults />
        </React.Fragment>
      </Store>
    </div>
  );
}

export default App;
