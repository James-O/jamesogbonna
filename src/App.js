import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
