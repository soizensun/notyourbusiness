import React, { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";
import { addData, getData } from './controllers/DBcontrollerTest'
import { Center, Container } from "./styledCoponents/MainStyle";

function App() {
  const [text, setText] = useState('')
  const [test, setTest] = useState([])

  const get = () => {
    
    getData()
      .then((querySnapshot) => {
        const tmpTest = []
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          tmpTest.push(doc.data().note)
        });
        setTest(tmpTest)
      })
  }

  const saveData = () => {
    addData(text);
    setText("")
  }

  useEffect(() => {
    get()
  }, []);

  return (
    <Container>
      <Center>
        {/* <Note md={'- Revenue was off the chart \n - Profits were higher than ever.'} /> */}
        {
          test.map((note) => <Note md={note} />)
        }
        ----------------
        <Note md={text} />
        <textarea value={text} type="text-area" name="name" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => saveData()}>save</button>
      </Center>
    </Container>
  );
}

export default App;
