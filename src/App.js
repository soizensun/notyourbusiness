import React, { useEffect } from 'react'
import {setData, addData, readRealTime, readColloction} from './controllers/DBcontrollerTest'
import './App.css';



function App() {

  useEffect(() => {
    readRealTime()

  }, [])

  return (
    <div>
      <button onClick={() => setData()}>setData</button>
      <button onClick={() => addData()}>addData</button>
      <button onClick={() => readColloction()}>readColloction</button>
    </div>
  );
}

export default App;
