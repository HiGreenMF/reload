import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lock, setLock] = React.useState<number>(0)

  const my_click = React.useCallback(()=>{
    setLock(lock+1)
  },[lock])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{lock}</p>
        <button onClick={my_click}>点击＋1</button>
      </header>
    </div>
  );
}

export default App;
