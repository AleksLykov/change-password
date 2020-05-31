import React from 'react';
import './App.css';
import PassChanger from './passChanger/passChanger'

function App() {
  const [passView, setPassView] = React.useState(false)

  // const 

  return (
    <div className="App">
      <header className="App-header">
        { passView ? <h2>Header with pass change</h2> : <h2>Header without password change</h2>}
      </header>
      <PassChanger passView={setPassView} />
    </div>
  );
}

export default App;
