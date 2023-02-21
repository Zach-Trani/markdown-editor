import { useState } from "react";
import Markdown from "./Components/Markdown";
import NavBar from "./Components/NavBar";

function App() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div className="App">
      <div>
        <NavBar input={dataFromChild}/>
        <Markdown onData={handleDataFromChild}/>
      </div>
    </div>
  );
}

export default App;
