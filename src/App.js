import { Route, Routes } from "react-router-dom";
import Markdown from "./Components/Markdown";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Markdown />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
