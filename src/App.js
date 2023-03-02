import { Route, Routes } from "react-router-dom";
import Markdown from "./Components/Markdown";
import Home from "./Components/Home";
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markdown" element={<Markdown />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
