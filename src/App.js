import React from "react";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Renderelements from "./components/Renderelements";
import Footer from "./components/Footer";

function App() {
  const [array, setarr] = useState([]);
  const [catgcontrol, setcatgcontrol] = useState(1);
  const [inputcontrol, setinputcontrol] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let newitem = {
      catgcontrol,
      inputcontrol,
      ispacked: false,
      id: Date.now(),
    };

    if (!catgcontrol || !inputcontrol) return;

    setarr((arr) => [...arr, newitem]);

    setcatgcontrol("");
    setinputcontrol("");
  }

  return (
    <>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        catgcontrol={catgcontrol}
        inputcontrol={inputcontrol}
        setcatgcontrol={setcatgcontrol}
        setinputcontrol={setinputcontrol}
      />

      <Renderelements array={array} setarray={setarr} />
      <Footer array={array} setarray={setarr} />
    </>
  );
}

export default App;
