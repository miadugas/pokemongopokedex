import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./views/Index";
import Details from "./views/Details";



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path=":name" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
