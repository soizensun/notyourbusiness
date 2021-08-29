import React, { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";
import {addData, getData} from './controllers/DBcontrollerTest'
import { Center, Container } from "./styledCoponents/MainStyle";

function App() {
  const [text, setText] = useState('')
  const [test, setTest] = useState('')
  useEffect(() => {

  }, []);

  return (
    <Container>
      <Center>
        <Note md={'- Revenue was off the chart \n - Profits were higher than ever.'} />

        <Note md={text} />
        <textarea type="text-area" name="name" onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => {addData(text); setText("")}}>save</button>
      </Center>
    </Container>
  );
}

export default App;
